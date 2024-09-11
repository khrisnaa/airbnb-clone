import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getListings } from '@/app/actions/getListings';
import { EmptyState } from '@/app/components/empty-state';
import { PropertiesClient } from '@/app/properties/properties-client';
import { TripsClient } from '@/app/trips/trips-client';

const Page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings(currentUser.id);

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you havent reserved any trips"
      />
    );
  }
  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};
export default Page;
