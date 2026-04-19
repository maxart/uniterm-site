import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PaneProps {
  title: string;
  dot: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export function Pane({ title, dot, children, active, className }: PaneProps) {
  return (
    <div
      className={cn(
        'flex min-w-0 flex-col gap-1 p-4',
        active && 'ring-1 ring-[var(--color-accent)]/40 ring-inset',
        className
      )}
    >
      <div className="mb-1 flex items-center gap-2 text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: dot }}
          aria-hidden
        />
        {title}
      </div>
      {children}
    </div>
  );
}

interface LineProps {
  children: ReactNode;
  muted?: boolean;
  dim?: boolean;
}

export function Line({ children, muted, dim }: LineProps) {
  return (
    <p
      className={cn(
        'truncate',
        dim
          ? 'text-[var(--color-fg-dim)]'
          : muted
            ? 'text-[var(--color-fg-muted)]'
            : 'text-[var(--color-fg)]'
      )}
    >
      {children}
    </p>
  );
}
