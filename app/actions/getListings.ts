'use server';

import { db } from '@/app/libs/db';

export const getListings = async () => {
  try {
    const listings = await db.listing.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};
