'use client';

import { IconType } from 'react-icons';

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

export const CategoryInput = ({
  icon: Icon,
  label,
  selected,
  onClick,
}: CategoryInputProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black ${selected ? 'border-black' : 'border-neutral-200'}`}
    >
      <Icon size={32} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};
