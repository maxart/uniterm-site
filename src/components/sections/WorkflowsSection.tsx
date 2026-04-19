import {
  FolderOpen,
  Palette,
  PanelLeftClose,
  Search,
  SplitSquareHorizontal,
  Target,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

interface PaletteItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  path?: string;
  chord: string[];
}

const ITEMS: PaletteItem[] = [
  {
    icon: FolderOpen,
    label: 'Open Project',
    path: '~/work/uniterm',
    chord: ['Mod', 'O'],
  },
  {
    icon: Palette,
    label: 'Switch Theme',
    path: 'Tokyo Night',
    chord: ['↵'],
  },
  {
    icon: SplitSquareHorizontal,
    label: 'Split Right',
    chord: ['Mod', 'D'],
  },
  {
    icon: Target,
    label: 'Focus Pane',
    path: 'Dev Server',
    chord: ['Mod', 'Alt', '→'],
  },
  {
    icon: PanelLeftClose,
    label: 'Toggle Sidebar',
    chord: ['Mod', 'B'],
  },
];

export function WorkflowsSection() {
  return (
    <section
      id="workflows"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            Workflows
          </p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Muscle memory at the speed of thought.
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-fg-muted)]">
            Open projects, switch themes, jump between panes, and fire custom
            workflows, all from one palette. Fuzzy-matched, keyboard-only,
            blink-and-you'll-miss-it fast.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(125,211,252,0.1),transparent_70%)]"
          />
          <div className="overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3">
              <Search
                className="h-4 w-4 text-[var(--color-fg-dim)]"
                aria-hidden
              />
              <span className="flex-1 font-mono text-sm text-[var(--color-fg)]">
                open<span className="opacity-60">_</span>
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
                ⌘K
              </span>
            </div>
            <ul className="flex flex-col divide-y divide-[var(--color-border)]">
              {ITEMS.map(({ icon: Icon, label, path, chord }, i) => (
                <li
                  key={label}
                  className={
                    'flex items-center gap-3 px-4 py-2.5 ' +
                    (i === 0 ? 'bg-[var(--color-accent)]/10' : '')
                  }
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-[var(--color-fg-muted)]"
                    aria-hidden
                  />
                  <div className="flex min-w-0 flex-1 items-baseline gap-2">
                    <span className="truncate text-sm text-[var(--color-fg)]">
                      {label}
                    </span>
                    {path && (
                      <span className="truncate font-mono text-[11px] text-[var(--color-fg-dim)]">
                        {path}
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1">
                    {chord.map((k) => (
                      <kbd
                        key={k}
                        className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-1.5 font-mono text-[10px] text-[var(--color-fg-muted)]"
                      >
                        {k}
                      </kbd>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-[var(--color-border)] px-4 py-2 font-mono text-[10px] tracking-wider text-[var(--color-fg-dim)] uppercase">
              <span>↵ Open</span>
              <span>Esc Close</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
