import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ProseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Prose({ children, className, ...rest }: ProseProps) {
  return (
    <div
      className={cn(
        'docs-prose text-[15px] leading-relaxed text-[var(--color-fg)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function H1({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h1
      id={id}
      className="mt-2 mb-4 scroll-mt-28 text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] font-semibold tracking-tight text-[var(--color-fg)]"
    >
      {children}
    </h1>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mt-0 mb-10 text-lg leading-relaxed text-[var(--color-fg-muted)]">
      {children}
    </p>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-14 mb-3 scroll-mt-28 border-t border-[var(--color-border)] pt-10 text-[1.6rem] leading-snug font-semibold tracking-tight text-[var(--color-fg)] first:mt-0 first:border-t-0 first:pt-0"
    >
      {children}
    </h2>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="mt-8 mb-2 scroll-mt-28 text-lg font-semibold tracking-tight text-[var(--color-fg)]"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="my-4 text-[var(--color-fg)]">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="my-4 list-disc space-y-1.5 pl-6 marker:text-[var(--color-fg-dim)]">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-1.5 pl-6 marker:text-[var(--color-fg-dim)]">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="text-[var(--color-fg)]">{children}</li>;
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-[0.35em] py-[0.1em] font-mono text-[0.875em] text-[var(--color-accent)]">
      {children}
    </code>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return (
    <strong className="font-semibold text-[var(--color-fg)]">{children}</strong>
  );
}
