import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { KeyboardEvent } from 'react';
import { useMemo, useState } from 'react';

import type { OsEntry } from '@/lib/osThemes';

interface Props {
  entries: OsEntry[];
}

export function OsThemeCarousel({ entries }: Props) {
  const [osIndex, setOsIndex] = useState(0);
  const activeOs = entries[osIndex]!;
  const [themeId, setThemeId] = useState(activeOs.defaultThemeId);

  const activeTheme = useMemo(
    () => activeOs.themes.find((t) => t.id === themeId) ?? activeOs.themes[0]!,
    [activeOs, themeId],
  );

  function goToOs(next: number) {
    const i = (next + entries.length) % entries.length;
    setOsIndex(i);
    setThemeId(entries[i]!.defaultThemeId);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToOs(osIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToOs(osIndex - 1);
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Uniterm themes by operating system"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
    >
      {/* Wallpaper */}
      <img
        key={activeOs.id}
        src={activeOs.wallpaper}
        alt={activeOs.wallpaperAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Contrast overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70"
      />

      <div className="relative flex aspect-[4/5] w-full flex-col p-5 md:aspect-[16/10] md:p-8">
        {/* Top: OS pager */}
        <div className="flex items-center justify-center gap-3 sm:justify-between">
          <button
            type="button"
            aria-label="Previous OS"
            onClick={() => goToOs(osIndex - 1)}
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 sm:grid"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <div
            role="tablist"
            aria-label="Select operating system"
            className="flex gap-1 rounded-full border border-white/15 bg-black/40 p-1 backdrop-blur-md"
          >
            {entries.map((os, i) => {
              const selected = i === osIndex;
              return (
                <button
                  key={os.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => goToOs(i)}
                  className={
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-colors ' +
                    (selected ? 'bg-white text-black' : 'text-white/80 hover:text-white')
                  }
                >
                  {os.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next OS"
            onClick={() => goToOs(osIndex + 1)}
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 sm:grid"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {/* Middle: tagline + screenshot */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6">
          <p className="rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md">
            {activeOs.tagline}
          </p>
          <img
            key={activeTheme.id}
            src={activeTheme.screenshot}
            alt={`Uniterm on ${activeOs.label} with the ${activeTheme.name} theme`}
            className="max-h-[55%] w-auto max-w-[85%] rounded-xl border border-white/15 shadow-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Bottom: theme picker */}
        <div className="flex flex-col items-center gap-3">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-xs tracking-wider text-white/90 backdrop-blur-md">
            {activeTheme.name}
          </span>
          <div role="tablist" aria-label={`Themes for ${activeOs.label}`} className="flex gap-3">
            {activeOs.themes.map((t) => {
              const selected = t.id === activeTheme.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-label={t.name}
                  onClick={() => setThemeId(t.id)}
                  className={
                    'h-8 w-8 rounded-full border transition-all ' +
                    (selected
                      ? 'scale-110 border-white ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-black/40'
                      : 'border-white/40 hover:scale-105 hover:border-white')
                  }
                  style={{ backgroundColor: t.swatch }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
