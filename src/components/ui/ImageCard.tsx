import { cn } from '../../lib/cn';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '4/3' | '3/4' | '16/9' | '1/1';
}

export function ImageCard({ src, alt, className, aspectRatio = '4/3' }: ImageCardProps) {
  const aspectClasses = {
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '16/9': 'aspect-video',
    '1/1': 'aspect-square',
  };

  return (
    <div className={cn('rounded-[80px] overflow-hidden', aspectClasses[aspectRatio], className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
