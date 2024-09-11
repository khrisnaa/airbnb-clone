'use server';

import { db } from '@/app/libs/db';

export const getListings = async (userId: string) => {
  try {
    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await db.listing.findMany({
      where: query,
      orderBy: { createdAt: 'desc' },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};
