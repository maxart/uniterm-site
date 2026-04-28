import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Link } from '@/lib/router';

import { findAdjacent } from './nav';

export function DocsPrevNext({ path }: { path: string }) {
  const { prev, next } = findAdjacent(path);
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 grid grid-cols-1 gap-3 border-t border-[var(--color-border)] pt-10 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          to={prev.path}
          className="group flex flex-col gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-left transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-[var(--color-fg-dim)] uppercase">
            <ArrowLeft className="h-3 w-3" aria-hidden />
            Previous
          </span>
          <span className="text-[15px] font-medium text-[var(--color-fg)]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
      {next ? (
        <Link
          to={next.path}
          className="group flex flex-col gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-right transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)] sm:items-end"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-[var(--color-fg-dim)] uppercase">
            Next
            <ArrowRight className="h-3 w-3" aria-hidden />
          </span>
          <span className="text-[15px] font-medium text-[var(--color-fg)]">
            {next.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  );
}
