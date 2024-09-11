'use client';

import { Container } from '@/app/components/container';
import { Heading } from '@/app/components/heading';
import { ListingCard } from '@/app/components/listings/listing-card';
import { Listing, User } from '@prisma/client';

interface FavoritesClientProps {
  listings: Listing[];
  currentUser?: User | null;
}

export const FavoritesClient = ({
  listings,
  currentUser,
}: FavoritesClientProps) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of place you have favorited" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            data={listing}
            currentUser={currentUser}
            key={listing.id}
          />
        ))}
      </div>
    </Container>
  );
};
