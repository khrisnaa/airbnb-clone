import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { db } from '@/app/libs/db';
import { NextResponse } from 'next/server';

export const POST = async (
  req: Request,
  { params }: { params: { listingId: string } },
) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;
  console.log('🚀 ~ listingId:', listingId);

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(listingId);

  const user = await db.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { listingId: string } },
) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter((id) => id !== listingId);

  const user = await db.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
};
