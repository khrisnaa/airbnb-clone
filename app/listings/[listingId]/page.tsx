import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getListingById } from '@/app/actions/getListingById';
import { EmptyState } from '@/app/components/empty-state';
import { ListingClient } from './listing-client';
import { getReservations } from '@/app/actions/getReservations';

const Page = async ({ params }: { params: { listingId: string } }) => {
  const listing = await getListingById(params.listingId);
  const reservations = await getReservations({ listingId: params.listingId });
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState showReset />;
  }

  return (
    <div>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </div>
  );
};
export default Page;
