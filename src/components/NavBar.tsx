import { Github } from 'lucide-react';

const APP_ICON = '/app-icon.png';

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md"
      >
        <a
          href="#top"
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
        </a>
        <span className="hidden font-mono text-[11px] tracking-wider text-[var(--color-fg-muted)] uppercase sm:inline">
          Alpha · coming soon
        </span>
        <a
          href="https://github.com/maxart/uniterm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Uniterm on GitHub"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[var(--color-fg-muted)] transition-colors hover:border-white/20 hover:text-[var(--color-fg)]"
        >
          <Github className="h-4 w-4" aria-hidden />
        </a>
      </nav>
    </header>
  );
}
