import type { ThemePalette } from '@/lib/themes';

interface Props {
  theme: ThemePalette;
}

export function ThemeSwatchStrip({ theme }: Props) {
  const chips = [
    theme.foreground,
    theme.accent,
    theme.green,
    theme.red,
    theme.background,
  ];

  return (
    <article
      className="flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-xl border border-[var(--color-border-strong)] p-4 font-mono transition-transform hover:-translate-y-0.5"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <div className="flex items-center gap-1.5">
        {chips.map((c) => (
          <span
            key={c}
            className="h-4 w-4 rounded-full ring-1 ring-inset ring-black/20"
            style={{ backgroundColor: c }}
            aria-hidden
          />
        ))}
      </div>

      <div className="flex flex-col gap-1 text-[11px]">
        <span className="opacity-70">$ ls -la</span>
        <span>
          <span style={{ color: theme.accent }}>src/</span>{' '}
          <span style={{ color: theme.green }}>README.md</span>{' '}
          <span style={{ color: theme.red }}>err.log</span>
        </span>
      </div>

      <p className="text-sm font-medium">{theme.name}</p>
    </article>
  );
}
