import { ArrowRight, Download, Github } from 'lucide-react';

import { CopyCommand } from './CopyCommand';
import { HeroBackground } from './HeroBackground';

const APP_ICON = '/app-icon.png';

const INSTALL_COMMAND = 'curl -fsSL https://uniterm.dev/install.sh | sh';

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
          <a
            href="#agents"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-wider text-[var(--color-fg-muted)] uppercase backdrop-blur hover:border-white/20 hover:text-[var(--color-fg)]"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
            />
            Built for the AI-coding era
            <ArrowRight
              className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>

          <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[1.02] font-semibold tracking-tight text-[var(--color-fg)]">
            Your terminal,{' '}
            <span className="bg-[linear-gradient(110deg,#e8e8ea_0%,#7dd3fc_45%,#e8e8ea_100%)] bg-clip-text text-transparent">
              multiplied.
            </span>
          </h1>
          <p className="max-w-2xl text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[var(--color-fg-muted)]">
            The terminal multiplexer for AI coding. Agents and AI workflows in
            project-scoped workspaces.
          </p>
        </div>

        <CopyCommand command={INSTALL_COMMAND} className="mt-2" />

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 font-medium text-black transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download
          </a>
          <a
            href="https://github.com/maxart/uniterm"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-medium text-[var(--color-fg)] transition-colors hover:border-white/30 hover:bg-white/5"
          >
            <Github className="h-4 w-4" aria-hidden />
            View on GitHub
            <ArrowRight
              className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>

        <span className="font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
          macOS · Windows · Linux
        </span>
      </div>
    </section>
  );
}
