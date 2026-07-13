import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { topic, shop, session, admin, payload } = await authenticate.webhook(request);

  if (!admin) {
    return new Response();
  }

  // Handle the different privacy webhooks
  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      // Shopify requires you to provide the customer's data within 30 days
      console.log(`Privacy request for customer data on shop: ${shop}`);
      console.log(payload);
      break;

    case "CUSTOMERS_REDACT":
      // Shopify requires you to delete the customer's data within 30 days
      console.log(`Privacy request to redact customer data on shop: ${shop}`);
      console.log(payload);
      break;

    case "SHOP_REDACT":
      // Shopify requires you to delete shop data within 48 hours of app uninstallation
      console.log(`Privacy request to redact shop data on shop: ${shop}`);
      console.log(payload);
      break;

    default:
      console.log(`Unhandled privacy webhook topic: ${topic}`);
  }

  return new Response("Webhook processed", { status: 200 });
};
