import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getReservations } from '@/app/actions/getReservations';
import { EmptyState } from '@/app/components/empty-state';
import { ReservationClient } from '@/app/reservations/reservation-client';

const Page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorize" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length == 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks you have no reserations on your properties"
      />
    );
  }
  return (
    <ReservationClient currentUser={currentUser} reservations={reservations} />
  );
};
export default Page;
