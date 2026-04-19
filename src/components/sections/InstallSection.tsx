import { useId, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { CopyCommand } from '../CopyCommand';

interface Platform {
  id: string;
  label: string;
  command: string;
  requirement: string;
  download: string;
}

const PLATFORMS: Platform[] = [
  {
    id: 'macos',
    label: 'macOS',
    command: 'curl -fsSL https://uniterm.dev/install.sh | sh',
    requirement: 'macOS 12+ · Apple Silicon and Intel',
    download: 'Download .dmg',
  },
  {
    id: 'windows',
    label: 'Windows',
    command: 'iwr https://uniterm.dev/install.ps1 | iex',
    requirement: 'Windows 10 1809+ · ConPTY required',
    download: 'Download .msi',
  },
  {
    id: 'linux',
    label: 'Linux',
    command: 'curl -fsSL https://uniterm.dev/install.sh | sh',
    requirement: 'Ubuntu 22.04+ · WebKitGTK 4.1',
    download: 'Download .AppImage',
  },
];

export function InstallSection() {
  const [activeId, setActiveId] = useState<string>(PLATFORMS[0].id);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = (index + dir + PLATFORMS.length) % PLATFORMS.length;
    setActiveId(PLATFORMS[next].id);
    tabRefs.current[next]?.focus();
  }

  const active = PLATFORMS.find((p) => p.id === activeId) ?? PLATFORMS[0];

  return (
    <section
      id="install"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(125,211,252,0.08),transparent_70%)]"
          />

          <div className="relative flex flex-col items-center text-center">
            <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
              Install
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
              One command. Three platforms.
            </h2>
            <p className="mb-10 max-w-xl text-base text-[var(--color-fg-muted)]">
              Grab a prebuilt binary with a single shell command, or build from
              source with Node 22+ and Rust 1.80+.
            </p>

            <div
              role="tablist"
              aria-label="Install platform"
              className="mb-6 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] p-1"
            >
              {PLATFORMS.map((p, i) => {
                const isActive = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${p.id}`}
                    aria-selected={isActive}
                    aria-controls={`${baseId}-panel-${p.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(p.id)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className={
                      'rounded-full px-4 py-1.5 text-sm font-medium transition-colors ' +
                      (isActive
                        ? 'bg-[var(--color-surface-2)] text-[var(--color-fg)]'
                        : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]')
                    }
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`${baseId}-panel-${active.id}`}
              aria-labelledby={`${baseId}-tab-${active.id}`}
              className="flex w-full max-w-2xl flex-col items-center gap-5"
            >
              <CopyCommand command={active.command} />
              <p className="font-mono text-xs text-[var(--color-fg-dim)]">
                {active.requirement}
              </p>
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-fg-dim)]"
                title="Prebuilt binaries not yet published"
              >
                {active.download}
                <span className="font-mono text-[10px] uppercase">(soon)</span>
              </span>
            </div>

            <a
              href="https://github.com/maxart/uniterm#build-from-source"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline"
            >
              Build from source on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
