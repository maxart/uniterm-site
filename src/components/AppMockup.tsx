import { cn } from '@/lib/utils';

import { Line, Pane } from './AppMockup.parts';

interface Props {
  className?: string;
}

interface Project {
  name: string;
  color: string;
  tabs?: string[];
  active?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: 'uniterm',
    color: '#7dd3fc',
    active: true,
    tabs: ['claude · dev · git', 'rust build', 'docs'],
  },
  { name: 'api-server', color: '#a7f3d0' },
  { name: 'landing-site', color: '#fca5a5' },
  { name: 'mobile-app', color: '#c4b5fd' },
];

export function AppMockup({ className }: Props) {
  return (
    <div
      role="img"
      aria-label="Screenshot of Uniterm with three split panes"
      className={cn(
        'grid grid-cols-[160px_1fr] overflow-hidden font-mono text-[11px]',
        className
      )}
    >
      <aside className="flex flex-col gap-0.5 border-r border-[var(--color-border)] bg-[var(--color-surface-2)] p-3">
        <div className="mb-2 flex items-center justify-between text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
          <span>Projects</span>
          <span className="text-[var(--color-fg)]">+</span>
        </div>
        {PROJECTS.map((p) => (
          <div key={p.name} className="flex flex-col">
            <div
              className={cn(
                'flex items-center gap-2 rounded-md px-2 py-1.5',
                p.active && 'bg-white/[0.06]'
              )}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: p.color }}
                aria-hidden
              />
              <span className="truncate text-[var(--color-fg)]">{p.name}</span>
            </div>
            {p.tabs && p.active && (
              <ul className="mt-0.5 mb-1 flex flex-col gap-0.5 pl-5">
                {p.tabs.map((t, i) => (
                  <li
                    key={t}
                    className={cn(
                      'truncate rounded px-2 py-1 text-[var(--color-fg-muted)]',
                      i === 0 && 'bg-[var(--color-accent)]/10 text-[var(--color-fg)]'
                    )}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>

      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-1 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-2">
          <div className="flex items-center gap-1.5 pr-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
          </div>
          <div className="flex items-center gap-1 text-[10px]">
            <span className="rounded-t-md border-b-0 border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[var(--color-fg)]">
              claude · dev · git
            </span>
            <span className="rounded-t-md px-3 py-1 text-[var(--color-fg-dim)]">
              rust build
            </span>
            <span className="rounded-t-md px-3 py-1 text-[var(--color-fg-dim)]">
              docs
            </span>
          </div>
        </div>

        <div className="grid min-h-[320px] grid-cols-1 divide-y divide-[var(--color-border)] bg-[var(--color-surface)] sm:grid-cols-[1.4fr_1fr] sm:grid-rows-[1fr_1fr] sm:divide-x sm:divide-y-0">
          <Pane
            title="claude"
            dot="#7dd3fc"
            active
            className="sm:row-span-2 sm:border-b-0"
          >
            <Line>
              <span className="text-[var(--color-accent)]">❯</span> Refactor the
              auth middleware to use JWTs
            </Line>
            <Line muted>
              <span className="text-[#86efac]">●</span> Reading src/auth/*.ts…
            </Line>
            <Line muted>
              <span className="text-[#86efac]">●</span> Found 3 files, 187 lines.
            </Line>
            <Line>
              I'll update
              <span className="text-[var(--color-accent)]"> middleware.ts </span>
              first, then rotate the session store.
            </Line>
            <Line muted>
              <span className="animate-pulse text-[#86efac]">●</span> Editing
              src/auth/middleware.ts
            </Line>
            <Line muted>
              <span className="text-[var(--color-accent)]">❯</span>
              <span
                aria-hidden
                className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-[var(--color-fg)]/70 align-middle"
              />
            </Line>
          </Pane>

          <Pane title="dev server" dot="#86efac">
            <Line muted>
              <span className="text-[#86efac]">▲</span> Next.js 15.0.0
            </Line>
            <Line muted>
              Local:
              <span className="text-[var(--color-accent)]"> http://localhost:3000</span>
            </Line>
            <Line dim>✓ Ready in 1.2s</Line>
            <Line dim>✓ Compiled /middleware in 42ms</Line>
            <Line dim>
              <span className="animate-pulse text-[#86efac]">●</span> watching…
            </Line>
          </Pane>

          <Pane title="git" dot="#fca5a5">
            <Line muted>$ git status</Line>
            <Line dim>On branch feat/jwt-auth</Line>
            <Line>
              <span className="text-[#86efac]">M</span>{' '}
              <span className="text-[var(--color-fg-muted)]">
                src/auth/middleware.ts
              </span>
            </Line>
            <Line>
              <span className="text-[#86efac]">M</span>{' '}
              <span className="text-[var(--color-fg-muted)]">
                src/auth/session.ts
              </span>
            </Line>
            <Line>
              <span className="text-[#f87171]">??</span>{' '}
              <span className="text-[var(--color-fg-muted)]">
                src/auth/jwt.ts
              </span>
            </Line>
          </Pane>
        </div>
      </div>
    </div>
  );
}
