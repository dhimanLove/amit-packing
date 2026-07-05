import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const baseStyles = cn(
      'text-[14px] font-normal tracking-[0.14px]',
      'px-[22px] py-[18px] rounded-[100px]',
      'transition-opacity duration-200',
      'cursor-pointer',
      'inline-flex items-center justify-center'
    );

    const variants = {
      primary: 'bg-[var(--color-carbon-warm)] text-[var(--color-paper-white)] hover:opacity-80 active:opacity-60',
      ghost: 'bg-transparent text-[var(--color-carbon-warm)] border border-[var(--color-carbon-warm)] hover:bg-[var(--color-carbon-warm)] hover:text-[var(--color-paper-white)]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
