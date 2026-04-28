import { Download } from 'lucide-react';
import type { CSSProperties } from 'react';

import { HeroBackground } from './HeroBackground';
import { SourcePrivateButton } from './SourcePrivateButton';

const APP_ICON = '/app-icon.png';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-black text-[var(--color-fg)]"
    >
      <HeroBackground className="-z-10" />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-8 px-6 pt-32 pb-24 text-center sm:gap-10">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[28%] bg-[radial-gradient(circle_at_50%_50%,rgba(125,211,252,0.18),transparent_65%)] blur-2xl"
          />
          <img
            src={APP_ICON}
            alt=""
            width={144}
            height={144}
            draggable={false}
            fetchPriority="high"
            decoding="async"
            className="h-32 w-32 select-none sm:h-36 sm:w-36 [filter:drop-shadow(0_18px_32px_rgba(0,0,0,0.55))_drop-shadow(0_2px_6px_rgba(0,0,0,0.45))]"
          />
        </div>

        <div className="flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-wider text-[var(--color-fg-muted)] uppercase backdrop-blur">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
            />
            Built for the AI-coding era
          </span>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-semibold tracking-tight">
            <span
              className="shiny-text"
              style={
                {
                  '--shiny-base': '#b5b5b5',
                  '--shiny-shine': '#ffffff',
                } as CSSProperties
              }
            >
              Uniterm
            </span>
          </h1>
          <p className="max-w-2xl text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[var(--color-fg-muted)]">
            The terminal multiplexer for AI coding. Agents and AI workflows in
            project-scoped workspaces.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Downloads open when the alpha ships"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 font-medium text-[var(--color-fg-muted)] opacity-70"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download · coming soon
            </button>
            <SourcePrivateButton variant="pill">
              Follow on GitHub
            </SourcePrivateButton>
          </div>
        </div>

        <span className="font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
          macOS · Windows · Linux
        </span>
      </div>
    </section>
  );
}
