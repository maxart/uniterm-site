import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-[var(--color-fg)]">Uniterm</p>
          <p className="max-w-xs text-sm text-[var(--color-fg-muted)]">
            The local-first terminal multiplexer for AI coding agents. Free,
            cross-platform, no account.
          </p>
        </div>
        <a
          href="https://github.com/maxart/uniterm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
        >
          <Github className="h-3.5 w-3.5" aria-hidden />
          github.com/maxart/uniterm
        </a>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 font-mono text-xs text-[var(--color-fg-dim)]">
          <p>© Uniterm</p>
          <p>Alpha coming soon</p>
        </div>
      </div>
    </footer>
  );
}
