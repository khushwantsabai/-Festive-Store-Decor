import React from 'react';
import { authenticate } from '../shopify.server';
import { useActionData, useSubmit, useNavigation, useLoaderData } from 'react-router';
import Editor from '../components/Editor';
import prisma from '../db.server';

export async function loader({ request }) {
  const { session } = await authenticate.admin(request);
  const url = new URL(request.url);
  const draftId = url.searchParams.get('draftId');

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
            key: "active_template",
            type: "single_line_text_field",
            value: templateName,
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
