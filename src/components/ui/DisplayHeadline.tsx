import { cn } from '../../lib/cn';

interface DisplayHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  light?: boolean;
}

export function DisplayHeadline({
  text,
  className,
  as: Tag = 'h2',
  light = false,
}: DisplayHeadlineProps) {
  return (
    <Tag
      className={cn(
        'text-[36px] md:text-[52px] font-light leading-none tracking-[0.52px] whitespace-pre-line',
        light ? 'text-[var(--color-paper-white)]' : 'text-[var(--color-carbon-warm)]',
        className
      )}
    >
      {text}
    </Tag>
  );
}
