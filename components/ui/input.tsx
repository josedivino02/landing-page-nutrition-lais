import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 placeholder:text-ink-400 transition-colors',
        'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/20',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export { Input };