'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Logo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')}>
      <Image
        alt="image"
        className="hidden cursor-pointer md:block"
        height={100}
        width={100}
        src="/Airbnb_Logo.svg"
        priority
      />
    </div>
  );
};
