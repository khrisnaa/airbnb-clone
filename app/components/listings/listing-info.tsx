'use client';

import { Avatar } from '@/app/components/avatar';
import { ListingCategory } from '@/app/components/listings/listing-category';
import { useCountries } from '@/app/hooks/useCountries';
import { User } from '@prisma/client';
import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';

interface ListingInfoProps {
  user: User | null;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

export const ListingInfo = ({
  bathroomCount,
  category,
  description,
  guestCount,
  locationValue,
  roomCount,
  user,
}: ListingInfoProps) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  const Map = dynamic(() => import('@/app/components/map'), { ssr: false });

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          description={category.description}
          label={category.label}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <Map center={coordinates} />
    </div>
  );
};
