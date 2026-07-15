import React from 'react';
import { authenticate } from "../shopify.server";
import Pricing from '../components/Pricing';

export const action = async ({ request }) => {
  const { billing } = await authenticate.admin(request);
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
    await billing.request({
      plan: plan,
      isTest: true,
    });
  } catch (error) {
    if (error instanceof Response || (error && error.status)) {
      throw error;
    }
    console.error("Billing request failed:", error.message || error);
    return Response.json({ 
      success: false, 
      billingError: error.errorData ? JSON.stringify(error.errorData, null, 2) : (error.message || "Unknown error")
    });
  }
  
  return null;
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

import { useActionData, useNavigation, useLoaderData } from "react-router";

export default function PricingRoute() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting" || navigation.state === "loading";
  
  const submittingPlan = navigation.formData?.get("plan");
  const loaderData = useLoaderData();
  const activePlan = loaderData?.activePlan || 'Free';
  
  return <Pricing isSubmitting={isSubmitting} submittingPlan={submittingPlan} activePlan={activePlan} />;
}

import { boundary } from "@shopify/shopify-app-react-router/server";
import { useRouteError } from "react-router";

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
