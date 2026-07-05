import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

interface AccordionItemProps {
  title: string;
  body: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  body,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  className,
}: AccordionItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const onToggle = controlledOnToggle || (() => setInternalIsOpen(!internalIsOpen));

  return (
    <div className={cn('border-b border-[var(--color-carbon-warm)] py-5', className)}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[22px] font-normal tracking-[0.22px] text-[var(--color-carbon-warm)]">
          {title}
        </span>
        <span
          className={cn(
            'w-10 h-10 rounded-full',
            'border border-[var(--color-carbon-warm)]',
            'bg-[var(--color-paper-white)]',
            'flex items-center justify-center',
            'text-[var(--color-carbon-warm)] text-lg',
            'transition-colors duration-200',
            isOpen && 'bg-[var(--color-carbon-warm)] text-[var(--color-paper-white)]'
          )}
        >
          {isOpen ? <Minus size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[16px] font-normal leading-[1.4] text-[var(--color-carbon-warm)]/80 max-w-xl">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
