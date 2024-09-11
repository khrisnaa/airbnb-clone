import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getFavoriteListings } from '@/app/actions/getFavoriteListings';
import { EmptyState } from '@/app/components/empty-state';
import { FavoritesClient } from '@/app/favorites/favorites-client';

const Page = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};
export default Page;
