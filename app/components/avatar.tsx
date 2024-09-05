'use client';

import Image from 'next/image';

export const Avatar = () => {
  return (
    <div>
      <Image
        className="rounded-full"
        height={30}
        width={30}
        alt="avatar"
        src="Avatar_Male.svg"
      />
    </div>
  );
};
