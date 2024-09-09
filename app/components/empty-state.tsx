'use client';
import { Button } from '@/app/components/button';
import { Heading } from '@/app/components/heading';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

export const EmptyState = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4 w-48">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};
