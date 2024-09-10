'use server';

import { db } from '@/app/libs/db';

interface Params {
  listingId?: string;
  userId?: string;
  authorId?: string;
}
export const getReservations = async ({
  listingId,
  userId,
  authorId,
}: Params) => {
  try {
    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await db.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return reservations;
  } catch (error: any) {
    throw new Error(error);
  }
};
