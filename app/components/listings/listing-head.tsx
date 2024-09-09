'use client';

import { Heading } from '@/app/components/heading';
import { HeartButton } from '@/app/components/heart-button';
import { useCountries } from '@/app/hooks/useCountries';
import { User } from '@prisma/client';
import Image from 'next/image';

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageUrl: string;
  currentUser?: User | null;
  id: string;
}

export const ListingHead = ({
  imageUrl,
  locationValue,
  title,
  currentUser,
  id,
}: ListingHeadProps) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
        <Image
          alt="image"
          src={imageUrl}
          fill
          className="w-full object-cover"
        />
        <div className="absolute right-5 top-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
