import { Star } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  size?: number;
}

export function StarRating({ rating, maxRating = 5, className, size = 16 }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          size={size}
          weight="fill"
          className={cn(
            index < rating
              ? 'text-[var(--color-carbon-warm)]'
              : 'text-[var(--color-mercury)]'
          )}
        />
      ))}
    </div>
  );
}
