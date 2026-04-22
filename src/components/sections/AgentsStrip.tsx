import { LogoMarquee, type LogoMarqueeItem } from '../LogoMarquee';

const AGENTS: LogoMarqueeItem[] = [
  { name: 'Claude Code', src: '/claude-wordmark.svg' },
  { name: 'OpenCode', src: '/opencode-wordmark-dark.svg' },
  { name: 'Codex', src: '/codex-text.svg' },
];

export function AgentsStrip() {
  return (
    <section
      aria-label="AI agent integrations"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 sm:flex-row sm:gap-10 sm:py-16">
        <p className="shrink-0 text-center font-mono text-[11px] tracking-wider text-[var(--color-fg-dim)] uppercase sm:text-left">
          Eight bundled runners,
          <br className="hidden sm:block" />
          one terminal
        </p>
        <LogoMarquee items={AGENTS} logoHeight={26} className="w-full" />
      </div>
    </section>
  );
}
