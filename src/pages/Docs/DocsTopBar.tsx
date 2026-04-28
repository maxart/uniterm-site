import { Menu, X } from 'lucide-react';

import { SourcePrivateButton } from '@/components/SourcePrivateButton';
import { Link } from '@/lib/router';

const APP_ICON = '/app-icon.png';

interface DocsTopBarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export function DocsTopBar({ onMenuToggle, isMenuOpen }: DocsTopBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[88rem] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label={isMenuOpen ? 'Close docs menu' : 'Open docs menu'}
          aria-expanded={isMenuOpen}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)] lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" aria-hidden />
          ) : (
            <Menu className="h-4 w-4" aria-hidden />
          )}
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold text-[var(--color-fg)]"
        >
          <img
            src={APP_ICON}
            alt=""
            width={24}
            height={24}
            decoding="async"
            className="h-6 w-6 [filter:drop-shadow(0_0_4px_rgba(255,255,255,0.2))]"
          />
          Uniterm
        </Link>
        <span
          aria-hidden
          className="hidden h-4 w-px bg-[var(--color-border)] sm:inline-block"
        />
        <Link
          to="/docs"
          className="hidden text-sm font-medium text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] sm:inline"
        >
          Docs
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden font-mono text-[11px] tracking-wider text-[var(--color-fg-dim)] uppercase md:inline">
            Alpha · coming soon
          </span>
          <SourcePrivateButton variant="icon-circle" ariaLabel="GitHub" />
        </div>
      </div>
    </header>
  );
}
