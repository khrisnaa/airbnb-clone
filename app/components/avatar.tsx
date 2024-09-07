'use client';

import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
}

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <div>
      <Image
        className="rounded-full"
        height={30}
        width={30}
        alt="avatar"
        src={src || `Avatar_Male.svg`}
      />
    </div>
  );
};
