import React from 'react';
import { authenticate } from "../shopify.server";
import Pricing from '../components/Pricing';

export const action = async ({ request }) => {
  const { billing } = await authenticate.admin(request);
  const formData = await request.formData();
  const plan = formData.get("plan");
  
  if (!plan) return null;

  if (plan === 'Free') {
    const billingCheck = await billing.check({
      plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
      isTest: true,
    });
    if (billingCheck.hasActivePayment) {
      for (const sub of billingCheck.appSubscriptions) {
        await billing.cancel({ subscriptionId: sub.id, isTest: true, prorate: true });
      }
    }
    return { success: true };
  }

  await billing.request({
    plan: plan,
    isTest: true,
  });
  
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
    
    return { hasActivePayment: billingCheck.hasActivePayment, activePlan };
  } catch (error) {
    return { hasActivePayment: false, activePlan: 'Free' };
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

