export interface ThemePalette {
  name: string;
  background: string;
  foreground: string;
  accent: string;
  red: string;
  green: string;
}

export const THEMES: ThemePalette[] = [
  {
    name: 'Catppuccin Mocha',
    background: '#1e1e2e',
    foreground: '#cdd6f4',
    accent: '#89b4fa',
    red: '#f38ba8',
    green: '#a6e3a1',
  },
  {
    name: 'Tokyo Night',
    background: '#1a1b26',
    foreground: '#c0caf5',
    accent: '#7aa2f7',
    red: '#f7768e',
    green: '#9ece6a',
  },
  {
    name: 'Gruvbox Dark',
    background: '#282828',
    foreground: '#ebdbb2',
    accent: '#83a598',
    red: '#fb4934',
    green: '#b8bb26',
  },
  {
    name: 'Nord',
    background: '#2e3440',
    foreground: '#d8dee9',
    accent: '#88c0d0',
    red: '#bf616a',
    green: '#a3be8c',
  },
  {
    name: 'Rose Pine',
    background: '#191724',
    foreground: '#e0def4',
    accent: '#9ccfd8',
    red: '#eb6f92',
    green: '#31748f',
  },
  {
    name: 'Kanagawa',
    background: '#1f1f28',
    foreground: '#dcd7ba',
    accent: '#7e9cd8',
    red: '#c34043',
    green: '#76946a',
  },
  {
    name: 'Dracula',
    background: '#282a36',
    foreground: '#f8f8f2',
    accent: '#bd93f9',
    red: '#ff5555',
    green: '#50fa7b',
  },
  {
    name: 'Solarized Dark',
    background: '#002b36',
    foreground: '#93a1a1',
    accent: '#268bd2',
    red: '#dc322f',
    green: '#859900',
  },
  {
    name: 'One Dark',
    background: '#282c34',
    foreground: '#abb2bf',
    accent: '#61afef',
    red: '#e06c75',
    green: '#98c379',
  },
  {
    name: 'Monokai',
    background: '#272822',
    foreground: '#f8f8f2',
    accent: '#66d9ef',
    red: '#f92672',
    green: '#a6e22e',
  },
  {
    name: 'Ayu Dark',
    background: '#0a0e14',
    foreground: '#b3b1ad',
    accent: '#39bae6',
    red: '#f07178',
    green: '#aad94c',
  },
  {
    name: 'Everforest',
    background: '#2d353b',
    foreground: '#d3c6aa',
    accent: '#7fbbb3',
    red: '#e67e80',
    green: '#a7c080',
  },
];
