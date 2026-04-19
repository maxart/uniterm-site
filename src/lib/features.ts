import {
  Columns3,
  Command,
  Cpu,
  FolderTree,
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
      'Horizontal and vertical splits with draggable dividers. Nest as deep as your workflow needs.',
  },
  {
    icon: RefreshCw,
    title: 'Workspace persistence',
    description:
      'Tabs, splits, and focused panes restore on launch. Pick up exactly where you left off after any restart.',
  },
  {
    icon: Palette,
    title: '21 bundled themes',
    description:
      'Catppuccin, Tokyo Night, Gruvbox, Nord, Rose Pine, Kanagawa, and more. Full Ghostty theme compatibility.',
  },
  {
    icon: TerminalSquare,
    title: 'Shell- and WSL-aware',
    description:
      'Picks up every available shell on your system, including WSL distributions on Windows. Launch the right one in one click.',
  },
  {
    icon: Keyboard,
    title: 'Configurable hotkeys',
    description:
      'Ten rebindable shortcuts with a capture-mode recorder. Map everything to muscle memory.',
  },
  {
    icon: Search,
    title: 'In-terminal search + IME',
    description:
      'Debounced search with match navigation, plus full IME support for CJK and composition input.',
  },
  {
    icon: Command,
    title: 'Command palette',
    description:
      'Mod+K opens a searchable palette for tabs, panes, themes, and workflows. Never hunt for a menu again.',
  },
  {
    icon: Cpu,
    title: 'Native performance',
    description:
      'Tauri v2 + Rust backend with a WebGL-rendered xterm.js frontend. Tiny binary, zero runtime bloat.',
  },
];
