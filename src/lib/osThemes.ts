export interface OsTheme {
  id: string;
  name: string;
  screenshot: string;
  swatch: string;
}

export interface OsEntry {
  id: 'omarchy' | 'macos' | 'windows';
  label: string;
  tagline: string;
  wallpaper: string;
  wallpaperAlt: string;
  themes: OsTheme[];
  defaultThemeId: string;
}

export const OS_ENTRIES: OsEntry[] = [
  {
    id: 'omarchy',
    label: 'Omarchy',
    tagline: 'Arch + Hyprland, tuned by DHH.',
    wallpaper: '/wallpapers/omarchy-tokyo-night.jpg',
    wallpaperAlt: 'Omarchy Tokyo Night default wallpaper',
    defaultThemeId: 'tokyo-night',
    themes: [
      { id: 'tokyo-night', name: 'Tokyo Night', screenshot: '/themes/omarchy/tokyo-night.png', swatch: '#7aa2f7' },
      { id: 'lumon',       name: 'Lumon',       screenshot: '/themes/omarchy/lumon.png',       swatch: '#4ec9b0' },
      { id: 'ash',         name: 'Ash',         screenshot: '/themes/omarchy/ash.png',         swatch: '#c0c0c0' },
    ],
  },
  {
    id: 'macos',
    label: 'macOS',
    tagline: 'Ships native. Feels native.',
    wallpaper: '/wallpapers/macos-tahoe.jpg',
    wallpaperAlt: 'macOS Tahoe default wallpaper',
    defaultThemeId: 'iterm',
    themes: [
      { id: 'iterm',                    name: 'iTerm Default',            screenshot: '/themes/macos/iterm.png',                    swatch: '#c0c0c0' },
      { id: 'darker-than-one-dark-pro', name: 'Darker Than One Dark Pro', screenshot: '/themes/macos/darker-than-one-dark-pro.png', swatch: '#61afef' },
    ],
  },
  {
    id: 'windows',
    label: 'Windows',
    tagline: 'PowerShell, WSL, cmd. One terminal.',
    wallpaper: '/wallpapers/windows-bloom.jpg',
    wallpaperAlt: 'Windows 11 Bloom default wallpaper',
    defaultThemeId: 'tango-dark',
    themes: [
      { id: 'tango-dark', name: 'Tango Dark', screenshot: '/themes/windows/tango-dark.png', swatch: '#3465a4' },
      { id: 'campbell',   name: 'Campbell',   screenshot: '/themes/windows/campbell.png',   swatch: '#0037da' },
      { id: 'vintage',    name: 'Vintage',    screenshot: '/themes/windows/vintage.png',    swatch: '#00a300' },
    ],
  },
];
