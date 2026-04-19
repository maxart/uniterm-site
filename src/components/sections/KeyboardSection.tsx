import { useState } from 'react';

interface Shortcut {
  keys: string[];
  action: string;
}

const SHORTCUTS: Shortcut[] = [
  { keys: ['Mod', 'T'], action: 'New tab' },
  { keys: ['Mod', 'D'], action: 'Split right' },
  { keys: ['Mod', 'Shift', 'D'], action: 'Split down' },
  { keys: ['Mod', 'Alt', '→'], action: 'Focus pane right' },
  { keys: ['Ctrl', 'Tab'], action: 'Last-used tab' },
  { keys: ['Mod', 'B'], action: 'Toggle sidebar' },
  { keys: ['Mod', 'F'], action: 'Find in terminal' },
  { keys: ['Mod', 'O'], action: 'Open project' },
  { keys: ['Mod', 'K'], action: 'Command palette' },
  { keys: ['Mod', ','], action: 'Settings' },
];

function detectMac() {
  if (typeof navigator === 'undefined') return false;
  const platform =
    (navigator as Navigator & { userAgentData?: { platform?: string } })
      .userAgentData?.platform ?? navigator.platform;
  return /Mac|iPhone|iPad|iPod/i.test(platform);
}

function useIsMac() {
  const [isMac] = useState(detectMac);
  return isMac;
}

export function KeyboardSection() {
  const isMac = useIsMac();
  const modSymbol = isMac ? '⌘' : 'Ctrl';

  return (
    <section
      id="keyboard"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            Keyboard-first
          </p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Never touch the mouse.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[var(--color-fg-muted)]">
            Ten default shortcuts you can remap in settings. Capture-mode
            recording means you pick any chord, even weird ones your window
            manager doesn't touch.
            <br />
            <br />
            <span className="text-[var(--color-fg-dim)]">
              Mod = ⌘ on macOS, Ctrl on Windows and Linux.
            </span>
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <ul className="divide-y divide-[var(--color-border)]">
            {SHORTCUTS.map(({ keys, action }) => (
              <li
                key={action}
                className="flex items-center justify-between gap-6 px-5 py-3.5"
              >
                <span className="text-sm text-[var(--color-fg)]">{action}</span>
                <span className="flex items-center gap-1">
                  {keys.map((k, i) => (
                    <span key={`${action}-${i}`} className="flex items-center gap-1">
                      <Kbd>{k === 'Mod' ? modSymbol : k}</Kbd>
                      {i < keys.length - 1 && (
                        <span className="text-[var(--color-fg-dim)]">+</span>
                      )}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-1.5 font-mono text-[11px] text-[var(--color-fg)] shadow-[inset_0_-1px_0_rgba(0,0,0,0.4)]">
      {children}
    </kbd>
  );
}
