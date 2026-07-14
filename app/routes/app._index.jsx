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

export async function action({ request }) {
  const { session } = await authenticate.admin(request);
  const formData = await request.formData();
  const intent = formData.get('intent');
  const draftId = formData.get('draftId');

  if (intent === 'delete' && draftId) {
    await prisma.templateDraft.delete({
      where: { id: draftId }
    });
    return { success: true, deletedId: draftId };
  }
  return { success: false };
}

export default function Index() {
  const { drafts } = useLoaderData();
  return <Dashboard drafts={drafts} />;
}
