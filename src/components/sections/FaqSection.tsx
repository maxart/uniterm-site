import { ChevronDown } from 'lucide-react';

interface Qa {
  q: string;
  a: string;
}

const QAS: Qa[] = [
  {
    q: 'How much does Uniterm cost?',
    a: 'Nothing. Uniterm is free to download and use, with no paid tier, no usage limits, and no trial timer. The binary you download is the whole product.',
  },
  {
    q: 'Do I need to sign up or give you an email?',
    a: 'No. There is no account, no email collection, and no license key. Download the binary and launch it. Uniterm makes no network calls back to us, runs no telemetry, and has no analytics. Your shell sessions, project paths, and config stay on your machine.',
  },
  {
    q: 'Does Uniterm replace tmux?',
    a: 'No. Uniterm is a GUI terminal multiplexer with split panes, tabs, and a project sidebar. If you live inside tmux over SSH, keep tmux. Uniterm is for the local window you open first.',
  },
  {
    q: 'How is it different from Warp or iTerm2?',
    a: 'Uniterm is project-centric. Tabs and splits are grouped per folder and restored on launch. It runs on macOS, Windows, and Linux from the same codebase, and there is no account, no cloud sync, and no AI subscription gated behind the binary.',
  },
  {
    q: 'Can I bring my own theme?',
    a: "Yes. Uniterm reads Ghostty's .conf theme format. Drop a file into ~/.config/ghostty/themes/ and it shows up in the theme picker immediately. All UI colors follow the active palette.",
  },
  {
    q: 'Is my config synced to a cloud?',
    a: 'No. Config is a local file at platform-native paths (Application Support on macOS, ~/.config on Linux, %APPDATA% on Windows). Version-control it yourself if you want portability.',
  },
  {
    q: 'Why Tauri instead of Electron?',
    a: 'Smaller binaries, the OS-native webview instead of a bundled Chromium, and a Rust backend for PTY + workspace persistence. It is the reason the download is measured in megabytes, not hundreds of megabytes.',
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <ul className="flex flex-col">
          {QAS.map(({ q, a }) => (
            <li key={q} className="border-t border-[var(--color-border)] last:border-b">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-[var(--color-fg)] [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-[var(--color-fg-muted)] transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
