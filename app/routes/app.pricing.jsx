import React from 'react';
import { useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import Pricing from '../components/Pricing';

export const action = async ({ request }) => {
  const authResult = await authenticate.admin(request);
  const { billing, session } = authResult;

  const formData = await request.formData();
  const plan = formData.get("plan");
  
  if (!plan) return null;

  const billingCheck = await billing.check({
    plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
    isTest: true,
  });

  if (plan === 'Free') {
    if (billingCheck.hasActivePayment) {
      for (const sub of billingCheck.appSubscriptions) {
        await billing.cancel({ subscriptionId: sub.id, isTest: true, prorate: true });
      }
    }
    return Response.json({ success: true, plan: 'Free' });
  }

  if (billingCheck.hasActivePayment) {
    const activePlan = billingCheck.appSubscriptions[0].name;
    if (activePlan === plan) {
      return Response.json({ success: true, plan });
    }
  }

  try {
    const requestUrl = new URL(request.url);
    const shop = requestUrl.searchParams.get("shop") || session.shop;
    const returnUrl = `${requestUrl.protocol}//${requestUrl.host}/app/templates?shop=${shop}`;
    
    await billing.require({
      plans: [plan],
      isTest: true,
      onFailure: async () => billing.request({
        plan: plan,
        isTest: true,
        returnUrl: returnUrl,
      }),
    });
    
    // If we reach here, they already have the plan
    return Response.json({ success: true, plan });
  } catch (error) {
    if (error instanceof Response) {
      // Re-throw the redirect response so React Router/App Bridge can handle it natively
      throw error;
    }
    
    console.error("Billing request failed:", error);
    
    let errorDetails = error?.message || String(error);
    try {
      errorDetails += "\n\n" + JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
    } catch (e) {}

    return Response.json({ 
      success: false, 
      billingError: errorDetails
    });
  }
};

export const loader = async ({ request }) => {
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
    
    return Response.json({ hasActivePayment: billingCheck.hasActivePayment, activePlan });
  } catch (error) {
    return Response.json({ hasActivePayment: false, activePlan: 'Free' });
  }
};

export default function PricingRoute() {
  const loaderData = useLoaderData();
  const activePlan = loaderData?.activePlan || 'Free';
  
  return <Pricing activePlan={activePlan} />;
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
