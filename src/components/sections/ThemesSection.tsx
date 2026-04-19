import { ArrowUpRight } from 'lucide-react';

import { ThemeSwatchStrip } from '../ThemeSwatchStrip';
import { THEMES } from '@/lib/themes';

export function ThemesSection() {
  return (
    <section
      id="themes"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            Themes
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            21 themes. Or bring your own.
          </h2>
          <p className="text-base text-[var(--color-fg-muted)]">
            Ships with ports of the Omarchy and Ghostty theme libraries, plus
            full compatibility with Ghostty's
            <span className="font-mono text-[var(--color-fg)]"> .conf </span>
            format. Drop a file into
            <span className="font-mono text-[var(--color-fg)]">
              {' '}~/.config/ghostty/themes/{' '}
            </span>
            and it appears in the theme picker immediately.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {THEMES.map((theme) => (
            <li key={theme.name}>
              <ThemeSwatchStrip theme={theme} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-fg-muted)]">
            Showing 12 of 21 bundled themes.
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
                className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
