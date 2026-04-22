import { AppMockup } from '../AppMockup';

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            See it in action
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            One window. Every project. Every shell.
          </h2>
          <p className="text-base text-[var(--color-fg-muted)]">
            Project-scoped tabs on the left, infinitely-splittable panes on the
            right. Launch Claude Code in one split, your dev server in another,
            git in a third. All persistent across restarts, all reporting live
            status back to the pane header.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(125,211,252,0.08),transparent_70%)]"
          />
          <AppMockup className="mx-auto w-full max-w-5xl rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]" />
        </div>
      </div>
    </section>
  );
}
