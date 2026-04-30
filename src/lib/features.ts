import {
  Columns3,
  Cpu,
  FolderTree,
  Globe,
  Keyboard,
  Palette,
  RefreshCw,
  Search,
  TerminalSquare,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

export interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: FolderTree,
    title: 'Project-centric sidebar',
    description:
      'Organize terminals by project folder with collapsible tab groups. One window, every codebase you are working on.',
  },
  {
    icon: Columns3,
    title: 'Unlimited split panes',
    description:
      'Horizontal and vertical splits with draggable dividers and geometric directional focus. Nest as deep as your workflow needs.',
  },
  {
    icon: RefreshCw,
    title: 'Workspace persistence',
    description:
      'Tabs, splits, and focused panes restore on launch. Pick up a multi-hour agent session exactly where you left off.',
  },
  {
    icon: Palette,
    title: 'Hundreds of bundled themes',
    description:
      'The full iTerm2 Color Schemes and Omarchy collections ship in the box. Drop any Ghostty .conf theme into ~/.config/ghostty/themes/ and it appears in the picker — some may require an app restart to be picked up.',
  },
  {
    icon: TerminalSquare,
    title: 'Shell- and WSL-aware',
    description:
      'Picks up every installed shell, including each WSL distribution on Windows. Launch the right one in one click.',
  },
  {
    icon: Globe,
    title: 'Truecolor, everywhere',
    description:
      '24-bit color end-to-end on every OS, including under WSL via Windows ConPTY passthrough mode. Your theme renders the same whether you boot macOS, Windows, or Linux.',
  },
  {
    icon: Keyboard,
    title: 'Rebindable hotkeys',
    description:
      'Twelve default shortcuts with a capture-mode recorder. Map any chord, even ones your window manager would normally swallow.',
  },
  {
    icon: Search,
    title: 'In-terminal search + IME',
    description:
      'Debounced search with match navigation, plus full IME support for CJK and composition input. OSC 52 clipboard works over SSH.',
  },
  {
    icon: Cpu,
    title: 'Small and native',
    description:
      'Tauri v2 + Rust backend on top of the OS-native webview. No bundled Chromium, no Electron. Downloads weigh in at megabytes, not hundreds of them.',
  },
];
