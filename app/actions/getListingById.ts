'use server';

import { db } from '@/app/libs/db';

export const getListingById = async (id: string) => {
  try {
    const listing = await db.listing.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    return listing;
  } catch (error: any) {
    // throw new Error(error);
    return null;
  }
};
