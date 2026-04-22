import { ArrowUpRight } from 'lucide-react';

import { OsThemeCarousel } from '../OsThemeCarousel';
import { OS_ENTRIES } from '@/lib/osThemes';

export function ThemesSection() {
  return (
    <section
      id="themes"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            Themes
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Looks right at home on every OS.
          </h2>
          <p className="text-base text-[var(--color-fg-muted)]">
            Hundreds of themes ship in the box, including the full iTerm2 Color
            Schemes and Omarchy collections. Any Ghostty
            <span className="font-mono text-[var(--color-fg)]"> .conf </span>
            theme drops straight into the picker, and every UI surface follows
            the active palette. Pick an OS for a curated slice.
          </p>
        </div>

        <OsThemeCarousel entries={OS_ENTRIES} />

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-fg-muted)]">
            Any Ghostty{' '}
            <span className="font-mono text-[var(--color-fg)]">.conf</span>{' '}
            theme works. Drop one into{' '}
            <span className="font-mono text-[var(--color-fg)]">
              ~/.config/ghostty/themes/
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://learn.omacom.io/2/the-omarchy-manual/52/themes"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Omarchy theme gallery
              <ArrowUpRight
                className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="https://terminalcolors.com/ghostty/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Ghostty theme gallery
              <ArrowUpRight
                className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
