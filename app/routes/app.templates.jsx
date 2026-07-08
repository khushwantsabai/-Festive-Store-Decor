import React from 'react';
import { useActionData, useSubmit, useNavigation, useLoaderData } from 'react-router';
import { authenticate } from '../shopify.server';
import TemplatesPreview from '../components/TemplatesPreview';

export async function action({ request }) {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const templateName = formData.get('templateName');

  // 1. Get current App Installation ID
  const appInstRes = await admin.graphql(`
    query {
      currentAppInstallation {
        id
      }
    }
  `);
  const appInstData = await appInstRes.json();
  const appInstallationId = appInstData.data.currentAppInstallation.id;

  // 2. Update the Metafield
  const metafieldRes = await admin.graphql(
    `#graphql
    mutation CreateAppDataMetafield($metafieldsSetInput: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafieldsSetInput) {
        metafields {
          id
          namespace
          key
          value
        }
        userErrors {
          field
          message
        }
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

  return { success: true, publishedTemplate: templateName };
}

export async function loader({ request }) {
  const { billing } = await authenticate.admin(request);
  try {
    const billingCheck = await billing.check({
      plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
      isTest: true,
    });
    
    let activePlan = 'Free';
    if (billingCheck.hasActivePayment && billingCheck.appSubscriptions.length > 0) {
      activePlan = billingCheck.appSubscriptions[0].name;
    }
    return { activePlan };
  } catch (error) {
    return { activePlan: 'Free' };
  }
}

export default function TemplatesRoute() {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const loaderData = useLoaderData();
  const activePlan = loaderData?.activePlan || 'Free';

  const handlePublish = (templateName) => {
    submit({ templateName }, { method: 'post' });
  };

  return (
    <TemplatesPreview 
      onPublish={handlePublish} 
      isPublishing={navigation.state === 'submitting'}
      actionData={actionData}
      activePlan={activePlan}
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
