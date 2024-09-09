'use client';

import { Container } from '@/app/components/container';
import { ListingHead } from '@/app/components/listings/listing-head';
import { ListingInfo } from '@/app/components/listings/listing-info';
import { categories } from '@/app/components/navbar/categories';
import { Listing, Reservation, User } from '@prisma/client';
import { useMemo } from 'react';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: Listing & {
    user: User;
  };
  currentUser?: User | null;
}

export const ListingClient = ({
  listing,
  currentUser,
  reservations,
}: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label == listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageUrl={listing.imageUrl}
            locationValue={listing.locationValue}
            currentUser={currentUser}
            id={listing.id}
          />
          <div className="gircol1 mt-6 grid md:grid-cols-7 md:gap-10">
            <ListingInfo
              bathroomCount={listing.bathroomCount}
              category={category}
              description={listing.description}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
              roomCount={listing.roomCount}
              user={listing.user}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
