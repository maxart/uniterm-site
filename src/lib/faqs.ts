export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'How much does Uniterm cost?',
    a: 'Nothing. Uniterm is free to download and use, with no paid tier, no usage limits, and no trial timer. The binary you download is the whole product.',
  },
  {
    q: 'Do I need to sign up or give you an email?',
    a: 'No. There is no account, no email collection, and no license key. Download the binary and launch it. Uniterm makes no network calls back to us, runs no telemetry, and has no analytics. Your shell sessions, project paths, and config stay on your machine.',
  },
  {
    q: 'Which AI agents does Uniterm support out of the box?',
    a: 'Eight first-class runners ship bundled: Claude Code, OpenCode, Codex, Gemini CLI, Aider, Kiro CLI, Hermes, and OpenClaw. Uniterm detects which ones are installed on your machine (native PATH, WSL, and every common version manager: nvm, fnm, volta, mise, asdf, pnpm, bun, deno) and gives each one a one-click "new tab" launcher. You can still run any other CLI agent in any pane; the shipping ones just get the white-glove treatment.',
  },
  {
    q: 'Does Uniterm have its own AI or language model?',
    a: 'No. Uniterm runs whichever agent CLIs you already use, with your own API keys. The app never forwards prompts, commands, or files anywhere. Every byte goes directly from your terminal to the agent you launched. There is no Uniterm model, no Uniterm backend, and no Uniterm cloud.',
  },
  {
    q: 'Does Uniterm replace tmux?',
    a: 'No. Uniterm is a GUI terminal multiplexer with split panes, tabs, and a project sidebar. If you live inside tmux over SSH, keep tmux. Uniterm is for the local window you open first.',
  },
  {
    q: 'How is it different from Warp?',
    a: 'Uniterm is local-first and agent-agnostic. Warp ships one assistant behind an account and a cloud backend; Uniterm bundles eight agent runners, ships no account or telemetry, and uses the OSC 777 notify protocol so any agent that emits events can light up a status pill in the pane header. Keys, prompts, and files stay on your machine.',
  },
  {
    q: 'How is it different from iTerm2?',
    a: 'iTerm2 is a single-platform (macOS) terminal without agent integration. Uniterm runs the same codebase on macOS, Windows, and Linux, scopes tabs and splits per project folder, ships bundled agent runners, and reads Ghostty .conf themes so the whole ecosystem is portable. If you want iTerm2 features on Windows or Linux with a project sidebar and agent-aware panes, that is the niche Uniterm fills.',
  },
  {
    q: 'Can I bring my own theme?',
    a: "Yes. Uniterm reads Ghostty's .conf theme format and ships the full iTerm2 Color Schemes and Omarchy collections. Drop any .conf file into ~/.config/ghostty/themes/ and it appears in the picker — some may require an app restart to be picked up. All UI surfaces follow the active palette.",
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
