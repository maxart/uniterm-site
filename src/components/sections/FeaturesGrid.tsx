import { FEATURES } from '@/lib/features';

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            Features
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Everything you expect. Nothing in the way.
          </h2>
          <p className="text-base text-[var(--color-fg-muted)]">
            A focused terminal multiplexer that stays out of your flow. No
            configuration required to get started — deep customization when you
            want it.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group flex flex-col gap-3 bg-[var(--color-surface)] p-6 ring-0 ring-inset transition-all hover:bg-[var(--color-surface-2)] hover:ring-1 hover:ring-[var(--color-accent)]/25"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] text-[var(--color-accent)] transition-transform group-hover:-translate-y-0.5">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-base font-medium text-[var(--color-fg)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
