import React from 'react';
import { authenticate } from '../shopify.server';
import { useActionData, useSubmit, useNavigation, useLoaderData } from 'react-router';
import Editor from '../components/Editor';
import prisma from '../db.server';

import { redirect } from 'react-router';

export async function loader({ request }) {
  const { session, billing } = await authenticate.admin(request);
  const url = new URL(request.url);
  const draftId = url.searchParams.get('draftId');
  const templateParam = url.searchParams.get('template');

  let activePlan = 'Free';
  try {
    const billingCheck = await billing.check({
      plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
      isTest: true,
    });
    if (billingCheck.hasActivePayment && billingCheck.appSubscriptions.length > 0) {
      activePlan = billingCheck.appSubscriptions[0].name;
    }
  } catch (error) {
    activePlan = 'Free';
  }

  // Access control removed from loader to allow previewing in the editor

  let draftData = null;
  if (draftId) {
    draftData = await prisma.templateDraft.findUnique({
      where: { id: draftId }
    });
    // Ensure the draft belongs to this shop
    if (draftData && draftData.shop !== session.shop) {
      draftData = null;
    }
  }

  return { draftData };
}

export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const formData = await request.formData();
  const templateName = formData.get('templateName');
  const actionType = formData.get('actionType'); // 'publish' or 'draft'
  const textContent = formData.get('textContent');
  const buttonText = formData.get('buttonText');
  const bgColor = formData.get('bgColor');
  const btnBgColor = formData.get('btnBgColor');
  const textColor = formData.get('textColor');
  const showCloseButton = formData.get('showCloseButton') === 'true';
  const draftId = formData.get('draftId');

  if (actionType === 'draft') {
    let savedDraft;
    if (draftId) {
      savedDraft = await prisma.templateDraft.update({
        where: { id: draftId },
        data: { textContent, buttonText, bgColor, btnBgColor, textColor, showCloseButton, templateName }
      });
    } else {
      savedDraft = await prisma.templateDraft.create({
        data: {
          shop: session.shop,
          templateName,
          textContent,
          buttonText,
          bgColor,
          btnBgColor,
          textColor,
          showCloseButton
        }
      });
    }
    return { success: true, message: `Draft saved for ${templateName}`, draftId: savedDraft.id };
  }

  // Enforce access control for publishing
  const getRequiredPlan = (name) => {
    if (name === 'Merry Christmas' || name === 'Christmas Popup') return null;
    if (['Happy Diwali', 'Spin & Win Popup', 'Exit Intent Popup'].includes(name)) return 'Starter Plan';
    if (['Valentine', 'Cyber Monday', 'New Year Popup', 'Flash Sale Popup'].includes(name)) return 'Pro Plan';
    return 'Enterprise Plan';
  };
  
  const requiredPlan = getRequiredPlan(templateName);
  if (requiredPlan) {
    let activePlan = 'Free';
    try {
      const { billing } = await authenticate.admin(request);
      const billingCheck = await billing.check({
        plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
        isTest: true,
      });
      
      // Fuzzy matching just in case the plan names don't exactly match
      if (billingCheck.hasActivePayment && billingCheck.appSubscriptions.length > 0) {
        const subName = billingCheck.appSubscriptions[0].name.toLowerCase();
        if (subName.includes('enterprise')) activePlan = 'Enterprise Plan';
        else if (subName.includes('pro')) activePlan = 'Pro Plan';
        else if (subName.includes('starter')) activePlan = 'Starter Plan';
        else activePlan = billingCheck.appSubscriptions[0].name;
      }
    } catch (error) {
      activePlan = 'Free';
    }

    const planRanks = { 'Free': 0, 'Starter Plan': 1, 'Pro Plan': 2, 'Enterprise Plan': 3 };
    const currentRank = planRanks[activePlan] || 0;
    const requiredRank = planRanks[requiredPlan] || 0;
    
    if (currentRank < requiredRank) {
      return { error: `Upgrade required! You need the ${requiredPlan} to publish this template. Please upgrade your plan in the Pricing tab.` };
    }
  }

  // Publish: Update the Metafield
  const appInstRes = await admin.graphql(`
    query {
      currentAppInstallation { id }
    }
  `);
  const appInstData = await appInstRes.json();
  const appInstallationId = appInstData.data.currentAppInstallation.id;

  const metafieldRes = await admin.graphql(
    `#graphql
    mutation CreateAppDataMetafield($metafieldsSetInput: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafieldsSetInput) {
        metafields { id namespace key value }
        userErrors { field message }
      }
    }`,
    {
      variables: {
        metafieldsSetInput: [
          {
            namespace: "festive",
            key: "template_config",
            type: "json",
            value: JSON.stringify({ templateName, textContent, buttonText, bgColor, btnBgColor, textColor, showCloseButton }),
            ownerId: appInstallationId
          }
        ]
      }
    }
  );

  const metafieldData = await metafieldRes.json();
  
  if (metafieldData.data.metafieldsSet.userErrors.length > 0) {
    return { error: metafieldData.data.metafieldsSet.userErrors[0].message };
  }

  return { success: true, message: `Successfully published ${templateName} to your store!`, publishedTemplate: templateName };
}

export default function EditorRoute() {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const loaderData = useLoaderData();

  return (
    <Editor 
      submit={submit} 
      actionData={actionData} 
      isSubmitting={navigation.state === 'submitting'} 
      loaderData={loaderData}
    />
  );
}

import { boundary } from "@shopify/shopify-app-react-router/server";
import { useRouteError } from "react-router";

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
