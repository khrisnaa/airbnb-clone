import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { db } from '@/app/libs/db';
import { NextResponse } from 'next/server';

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

  const listing = await db.listing.deleteMany({
    where: { id: listingId, userId: currentUser.id },
  });

  return NextResponse.json(listing);
};
