import { Github } from 'lucide-react';

interface Column {
  heading: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
}

const COLUMNS: Column[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Agents', href: '#agents' },
      { label: 'Themes', href: '#themes' },
      { label: 'Install', href: '#install' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/maxart/uniterm',
        external: true,
      },
      {
        label: 'Documentation',
        href: 'https://github.com/maxart/uniterm#readme',
        external: true,
      },
      {
        label: 'License',
        href: 'https://github.com/maxart/uniterm/blob/main/LICENSE',
        external: true,
      },
      { label: 'FAQ', href: '#faq' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 py-16 sm:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-3">
          <p className="text-sm font-semibold text-[var(--color-fg)]">Uniterm</p>
          <p className="max-w-xs text-sm text-[var(--color-fg-muted)]">
            A cross-platform terminal multiplexer for the age of AI coding
            agents.
          </p>
          <a
            href="https://github.com/maxart/uniterm"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            github.com/maxart/uniterm
          </a>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <p className="font-mono text-[11px] tracking-wider text-[var(--color-fg-dim)] uppercase">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {col.links.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-5 font-mono text-xs text-[var(--color-fg-dim)] sm:flex-row">
          <p>© Uniterm · MIT</p>
          <p>Built with Tauri + React</p>
        </div>
      </div>
    </footer>
  );
}
