import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Kbd({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        'inline-flex h-[1.45em] min-w-[1.45em] items-center justify-center rounded border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-[0.4em] font-mono text-[0.8em] leading-none font-medium text-[var(--color-fg)] shadow-[0_1px_0_rgba(0,0,0,0.4),inset_0_-1px_0_rgba(255,255,255,0.04)]',
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export function KeyChord({ keys }: { keys: string[] }) {
  return (
    <span className="inline-flex items-center gap-1 align-middle">
      {keys.map((key, i) => (
        <span key={`${key}-${i}`} className="inline-flex items-center gap-1">
          <Kbd>{key}</Kbd>
          {i < keys.length - 1 && (
            <span aria-hidden className="text-xs text-[var(--color-fg-dim)]">
              +
            </span>
          )}
        </span>
      ))}
    </span>
  );
}
