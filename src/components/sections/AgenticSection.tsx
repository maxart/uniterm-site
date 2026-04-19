import { Bot, Command, GitBranch, Layers } from 'lucide-react';

const POINTS = [
  {
    icon: Layers,
    title: 'Run agents alongside your editor',
    description:
      'Split a pane for Claude Code, one for your dev server, one for git. Everything visible at once — no context switching.',
  },
  {
    icon: GitBranch,
    title: 'A workspace per project',
    description:
      'Keep parallel agent sessions for different repos. The sidebar scopes tabs per project folder so nothing blurs together.',
  },
  {
    icon: Bot,
    title: 'Sessions survive restarts',
    description:
      'Workspace persistence restores tabs, splits, and focus. Your multi-hour agent pair-programming context comes back up instantly.',
  },
  {
    icon: Command,
    title: 'Command palette for everything',
    description:
      'Mod+K opens a searchable palette for tabs, panes, themes, and workflows. Never hunt for a menu again.',
  },
];

export function AgenticSection() {
  return (
    <section
      id="agents"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            Built for the AI-coding era
          </p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Your agents deserve a real workspace.
          </h2>
          <p className="mb-10 text-base leading-relaxed text-[var(--color-fg-muted)]">
            Uniterm was designed for developers running Claude Code, Codex,
            Aider, and their own in-terminal agents. Split panes, persistent
            workspaces, and a project-scoped sidebar make parallel agent
            sessions feel native.
          </p>

          <ul className="flex flex-col gap-6">
            {POINTS.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-accent)]">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-medium text-[var(--color-fg)]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <TerminalMock />
      </div>
    </section>
  );
}

function TerminalMock() {
  return (
    <div className="relative rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] font-mono text-xs shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        </div>
        <span className="text-[11px] text-[var(--color-fg-dim)]">
          uniterm — my-project
        </span>
        <span className="w-10" aria-hidden />
      </div>

      <div className="grid min-h-[320px] grid-cols-1 sm:grid-cols-[1.2fr_1fr] sm:grid-rows-[1fr_1fr]">
        <div className="flex flex-col gap-1.5 border-b border-[var(--color-border)] p-4 ring-1 ring-[var(--color-accent)]/30 ring-inset sm:row-span-2 sm:border-r sm:border-b-0">
          <div className="mb-1 flex items-center gap-2 text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
            claude
          </div>
          <p className="text-[var(--color-fg-muted)]">
            <span className="text-[var(--color-accent)]">❯</span> Refactor the
            auth middleware to use JWTs
          </p>
          <p className="text-[var(--color-fg-dim)]">
            <span className="text-[#86efac]">●</span> Reading src/auth/*.ts…
          </p>
          <p className="text-[var(--color-fg-dim)]">
            <span className="text-[#86efac]">●</span> Found 3 files, 187 lines.
          </p>
          <p className="text-[var(--color-fg)]">
            I'll update
            <span className="text-[var(--color-accent)]"> middleware.ts </span>
            first, then rotate the session store.
          </p>
          <p className="mt-1 text-[var(--color-fg-dim)]">
            <span className="animate-pulse text-[#86efac]">●</span> Editing
            src/auth/middleware.ts
          </p>
          <p className="mt-auto text-[var(--color-fg-dim)]">
            <span className="text-[var(--color-accent)]">❯</span>
            <span
              aria-hidden
              className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-[var(--color-fg)]/70 align-middle"
            />
          </p>
        </div>

        <div className="flex flex-col gap-1.5 border-b border-[var(--color-border)] p-4">
          <div className="mb-1 flex items-center gap-2 text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#86efac]" aria-hidden />
            dev server
          </div>
          <p className="text-[var(--color-fg-muted)]">
            <span className="text-[#86efac]">▲</span> Next.js 15.0.0
          </p>
          <p className="text-[var(--color-fg-muted)]">
            Local:
            <span className="text-[var(--color-accent)]"> http://localhost:3000</span>
          </p>
          <p className="text-[var(--color-fg-dim)]">✓ Ready in 1.2s</p>
          <p className="text-[var(--color-fg-dim)]">
            ✓ Compiled /middleware in 42ms
          </p>
          <p className="mt-auto text-[var(--color-fg-dim)]">
            <span className="animate-pulse text-[#86efac]">●</span> watching…
          </p>
        </div>

        <div className="flex flex-col gap-1.5 p-4">
          <div className="mb-1 flex items-center gap-2 text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fca5a5]" aria-hidden />
            git
          </div>
          <p className="text-[var(--color-fg-muted)]">$ git status</p>
          <p className="text-[var(--color-fg-dim)]">On branch feat/jwt-auth</p>
          <p className="text-[var(--color-fg)]">
            <span className="text-[#86efac]">M</span>{' '}
            <span className="text-[var(--color-fg-muted)]">
              src/auth/middleware.ts
            </span>
          </p>
          <p className="text-[var(--color-fg)]">
            <span className="text-[#86efac]">M</span>{' '}
            <span className="text-[var(--color-fg-muted)]">
              src/auth/session.ts
            </span>
          </p>
          <p className="text-[var(--color-fg)]">
            <span className="text-[#f87171]">??</span>{' '}
            <span className="text-[var(--color-fg-muted)]">
              src/auth/jwt.ts
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
