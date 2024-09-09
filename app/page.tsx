import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getListings } from '@/app/actions/getListings';
import { Container } from '@/app/components/container';
import { EmptyState } from '@/app/components/empty-state';
import { ListingCard } from '@/app/components/listings/listing-card';

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return (
      <Container>
        <div className="pt-24">
          <EmptyState showReset />
        </div>
      </Container>
    );
  }
  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
