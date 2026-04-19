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
            Uniterm reads Ghostty's theme format. Drop a file into
            <span className="font-mono text-[var(--color-fg)]">
              {' '}~/.config/ghostty/themes/{' '}
            </span>
            and it just appears in the theme picker. All UI colors follow the
            active palette.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {THEMES.map((theme) => (
            <li key={theme.name}>
              <ThemeSwatchStrip theme={theme} />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-[var(--color-fg-muted)]">
          Showing 12 of 21 bundled themes.
          <a
            href="https://github.com/ghostty-org/ghostty/tree/main/src/config/themes"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline"
          >
            Browse the Ghostty theme gallery
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  );
}
