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
            key: "template_config",
            type: "json",
            value: JSON.stringify({ templateName }),
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
  await authenticate.admin(request);
  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader.match(/mock_plan=([^;]+)/);
  const activePlan = match ? decodeURIComponent(match[1]) : 'Enterprise Plan';
  return { activePlan };
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
