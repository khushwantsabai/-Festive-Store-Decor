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

  try {
    if (plan === 'Free') {
      try {
        const billingCheck = await billing.check({
          plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
          isTest: false,
        });

        if (billingCheck?.hasActivePayment && billingCheck?.appSubscriptions) {
          for (const sub of billingCheck.appSubscriptions) {
            await billing.cancel({ subscriptionId: sub.id, isTest: false, prorate: true });
          }
        }
      } catch (cancelErr) {
        console.warn("Could not cancel existing subscriptions:", cancelErr);
      }
      return Response.json({ success: true, plan: 'Free' });
    }

    const requestUrl = new URL(request.url);
    const shop = requestUrl.searchParams.get("shop") || session.shop;
    const returnUrl = `${requestUrl.protocol}//${requestUrl.host}/app/templates?shop=${shop}`;
    
    // First attempt: Real billing (isTest: false)
    try {
      return await billing.request({
        plan: plan,
        isTest: false,
        returnUrl: returnUrl,
      });
    } catch (requestError) {
      // If it's a redirect Response, re-throw so App Bridge redirects to Shopify's approval page
      if (requestError instanceof Response) {
        throw requestError;
      }

      console.warn("Real billing request failed (e.g. development store). Retrying with test mode:", requestError);
      
      // Fallback: If live charges are rejected (e.g. dev/partner store), retry with test mode so approval page opens
      return await billing.request({
        plan: plan,
        isTest: true,
        returnUrl: returnUrl,
      });
    }
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
    let billingCheck;
    try {
      billingCheck = await billing.check({
        plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
        isTest: false,
      });
    } catch (e) {
      billingCheck = await billing.check({
        plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
        isTest: true,
      });
    }
    
    let activePlan = 'Free';
    if (billingCheck?.hasActivePayment && billingCheck?.appSubscriptions?.length > 0) {
      activePlan = billingCheck.appSubscriptions[0].name;
    }
    
    return Response.json({ hasActivePayment: !!billingCheck?.hasActivePayment, activePlan });
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
