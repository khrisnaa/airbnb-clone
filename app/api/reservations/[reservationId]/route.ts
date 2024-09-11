import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { db } from '@/app/libs/db';
import { NextResponse } from 'next/server';

export const DELETE = async (
  req: Request,
  { params }: { params: { reservationId: string } },
) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = params;

  if (!reservationId || typeof reservationId !== 'string') {
    throw new Error('Invalid ID');
  }

  const reservation = await db.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservation);
};
