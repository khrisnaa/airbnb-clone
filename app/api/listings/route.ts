import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { db } from '@/app/libs/db';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await req.json();

  const {
    category,
    location,
    guestCount,
    roomCount,
    bathroomCount,
    imageUrl,
    price,
    title,
    description,
  } = body;

  //check body
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await db.listing.create({
    data: {
      title,
      description,
      category,
      locationValue: location.value,
      guestCount,
      roomCount,
      bathroomCount,
      imageUrl,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
};
