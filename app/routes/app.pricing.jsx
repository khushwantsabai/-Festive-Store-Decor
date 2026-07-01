import React from 'react';
import { useActionData, useNavigation } from "react-router";
import { authenticate } from "../shopify.server";
import Pricing from '../components/Pricing';

export const action = async ({ request }) => {
  const { billing } = await authenticate.admin(request);
  const formData = await request.formData();
  const plan = formData.get("plan");
  
  if (!plan) return null;

  try {
    // Require the chosen plan. If they don't have it, it will redirect them to the approval screen.
    // We use isTest: true for development.
    await billing.require({
      plans: [plan],
      isTest: true,
      onFailure: async () => billing.request({
        plan: plan,
        isTest: true,
        returnUrl: request.url,
      }),
    });
  } catch (error) {
    if (error.errorData || (error instanceof Error && error.name === 'BillingError')) {
      return { billingError: error.errorData || error.message };
    }
    // Re-throw if it's a redirect Response from Shopify
    throw error;
  }
  
  return null;
};

export const loader = async ({ request }) => {
  const { billing } = await authenticate.admin(request);
  
  // We can check if they have a plan and pass it to the UI if we want to show active plan.
  try {
    const billingCheck = await billing.check({
      plans: ['Starter Plan', 'Pro Plan', 'Enterprise Plan'],
      isTest: true,
    });
    
    // In a real app we could pass this down, but for now we just return an empty object
    // or the plan details if needed.
    return { hasActivePayment: billingCheck.hasActivePayment };
  } catch (error) {
    return { hasActivePayment: false };
  }
};

export default function PricingRoute() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting" || navigation.state === "loading";
  
  return <Pricing isSubmitting={isSubmitting} />;
}

