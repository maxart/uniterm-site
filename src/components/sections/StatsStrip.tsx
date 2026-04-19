const ITEMS = [
  "O'App Licensed",
  'Tauri v2 + Rust',
  'xterm.js + WebGL',
  'macOS · Windows · Linux',
];

export function StatsStrip() {
  return (
    <section
      aria-label="Built with"
      className="border-y border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-0 px-6 py-10 font-mono text-[11px] tracking-wider text-[var(--color-fg-muted)] uppercase sm:grid-cols-4 sm:divide-x sm:divide-[var(--color-border)]">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-center justify-center px-4 py-2 text-center">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
