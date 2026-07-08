import React from 'react';
import { useLoaderData } from 'react-router';
import { authenticate } from '../shopify.server';
import prisma from '../db.server';
import Dashboard from '../components/Dashboard';

export async function loader({ request }) {
  const { session } = await authenticate.admin(request);
  const drafts = await prisma.templateDraft.findMany({
    where: { shop: session.shop },
    orderBy: { updatedAt: 'desc' }
  });
  return { drafts };
}

export default function Index() {
  const { drafts } = useLoaderData();
  return <Dashboard drafts={drafts} />;
}
