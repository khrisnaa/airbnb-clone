import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getListingById } from '@/app/actions/getListingById';
import { EmptyState } from '@/app/components/empty-state';
import { ListingClient } from './listing-client';

const Page = async ({ params }: { params: { listingId: string } }) => {
  const listing = await getListingById(params.listingId);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState showReset />;
  }

  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  );
};
export default Page;
