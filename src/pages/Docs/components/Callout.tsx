import { AlertTriangle, Info, Lightbulb, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Variant = 'note' | 'tip' | 'warning' | 'pitfall';

interface CalloutProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}

const VARIANTS: Record<
  Variant,
  { icon: typeof Info; tint: string; ring: string; label: string }
> = {
  note: {
    icon: Info,
    tint: 'bg-[rgba(125,211,252,0.06)]',
    ring: 'border-[rgba(125,211,252,0.25)]',
    label: 'Note',
  },
  tip: {
    icon: Lightbulb,
    tint: 'bg-[rgba(196,181,253,0.06)]',
    ring: 'border-[rgba(196,181,253,0.25)]',
    label: 'Tip',
  },
  warning: {
    icon: AlertTriangle,
    tint: 'bg-[rgba(251,191,36,0.06)]',
    ring: 'border-[rgba(251,191,36,0.30)]',
    label: 'Warning',
  },
  pitfall: {
    icon: Sparkles,
    tint: 'bg-[rgba(244,114,182,0.06)]',
    ring: 'border-[rgba(244,114,182,0.25)]',
    label: 'Pitfall',
  },
};

export function Callout({ variant = 'note', title, children }: CalloutProps) {
  const config = VARIANTS[variant];
  const Icon = config.icon;
  return (
    <aside
      className={cn(
        'my-6 flex gap-3 rounded-lg border px-4 py-3.5 text-[15px]',
        config.tint,
        config.ring,
      )}
    >
      <Icon
        className="mt-0.5 h-4 w-4 flex-none text-[var(--color-fg-muted)]"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <p className="mb-1 font-mono text-[11px] tracking-wider text-[var(--color-fg-muted)] uppercase">
          {title ?? config.label}
        </p>
        <div className="space-y-2 text-[var(--color-fg)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-md [&_code]:border [&_code]:border-[var(--color-border)] [&_code]:bg-[var(--color-surface)] [&_code]:px-[0.35em] [&_code]:py-[0.1em] [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:text-[var(--color-accent)]">
          {children}
        </div>
      </div>
    </aside>
  );
}
