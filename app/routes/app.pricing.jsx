import React from 'react';
import { authenticate } from "../shopify.server";
import Pricing from '../components/Pricing';

export const action = async ({ request }) => {
  await authenticate.admin(request);
  const formData = await request.formData();
  const plan = formData.get("plan");
  
  if (!plan) return null;
  
  const headers = new Headers();
  headers.append("Set-Cookie", "mock_plan=" + encodeURIComponent(plan) + "; Path=/; Max-Age=604800");
  return Response.json({ success: true }, { headers });
};

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader.match(/mock_plan=([^;]+)/);
  const activePlan = match ? decodeURIComponent(match[1]) : 'Enterprise Plan';
  return Response.json({ hasActivePayment: activePlan !== 'Free', activePlan });
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
