import { Link } from '@/lib/router';
import { useRouter } from '@/lib/useRouter';
import { cn } from '@/lib/utils';

import { DOCS_SECTIONS } from './nav';

interface DocsSidebarProps {
  onNavigate?: () => void;
}

export function DocsSidebar({ onNavigate }: DocsSidebarProps) {
  const { path } = useRouter();

  return (
    <nav aria-label="Documentation" className="flex flex-col gap-7 py-2 text-sm">
      {DOCS_SECTIONS.map((section) => (
        <div key={section.title}>
          <p className="mb-2 px-3 font-mono text-[11px] tracking-wider text-[var(--color-fg-dim)] uppercase">
            {section.title}
          </p>
          <ul className="flex flex-col">
            {section.pages.map((page) => {
              const active = path === page.path;
              return (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group relative flex items-center rounded-md px-3 py-1.5 transition-colors',
                      active
                        ? 'bg-[var(--color-surface)] text-[var(--color-fg)]'
                        : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]',
                    )}
                  >
                    {active && (
                      <span
                        aria-hidden
                        className="absolute top-1.5 bottom-1.5 -left-px w-px bg-[var(--color-accent)]"
                      />
                    )}
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
