import { cn } from '../../lib/cn';

interface SectionLabelProps {
  text: string;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ text, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span
        className={cn(
          'w-1 h-1 block flex-shrink-0',
          light ? 'bg-[var(--color-paper-white)]' : 'bg-[var(--color-carbon-warm)]'
        )}
      />
      <span
        className={cn(
          'text-[12px] font-normal tracking-[0.12em] uppercase',
          light ? 'text-[var(--color-paper-white)]' : 'text-[var(--color-carbon-warm)]'
        )}
      >
        {text}
      </span>
    </div>
  );
}
