import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Themes() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Customization
      </p>
      <H1>Themes & Appearance</H1>
      <Lede>
        Uniterm ships 21+ bundled themes and reads any Ghostty-compatible
        theme on disk. Theme changes apply live — every pane updates without
        a restart, including the surrounding UI palette.
      </Lede>

      <H2>Switching themes</H2>
      <P>
        Open <Strong>Settings → Appearance</Strong> and pick from the theme
        dropdown. The preview shows your current 16-color palette plus the
        derived UI tokens (background, foreground, accent, surfaces). Changes
        are saved as you make them.
      </P>

      <H2>Bundled themes</H2>
      <P>
        Curated from popular collections (omarchy, iTerm2-Color-Schemes,
        official sources). A non-exhaustive list:
      </P>
      <UL>
        <LI>Catppuccin (Mocha, Macchiato, Frappé, Latte)</LI>
        <LI>Tokyo Night, Tokyo Night Storm</LI>
        <LI>Gruvbox Dark, Gruvbox Light</LI>
        <LI>Nord</LI>
        <LI>Rose Pine, Rose Pine Moon, Rose Pine Dawn</LI>
        <LI>Kanagawa</LI>
        <LI>Dracula</LI>
        <LI>Miasma</LI>
        <LI>One Dark, One Light</LI>
        <LI>Solarized Dark, Solarized Light</LI>
      </UL>

      <H2>Custom themes</H2>
      <P>
        Drop a Ghostty-compatible <code>.conf</code> theme file into:
      </P>
      <UL>
        <LI><Strong>macOS / Linux</Strong>: <code>~/.config/ghostty/themes/</code></LI>
        <LI><Strong>Windows</Strong>: <code>%APPDATA%\ghostty\themes\</code></LI>
      </UL>
      <P>
        Uniterm rescans on launch and after clicking{' '}
        <Strong>Settings → Config → Reload</Strong>. Custom themes appear in
        the dropdown alongside the bundled ones.
      </P>

      <H3>Example custom theme</H3>

      <CodeBlock
        language="ini"
        filename="~/.config/ghostty/themes/midnight-blue.conf"
        code={`background = #0a0e1a
foreground = #d8dee9
cursor-color = #88c0d0
selection-background = #2e3440
selection-foreground = #eceff4

palette = 0=#3b4252
palette = 1=#bf616a
palette = 2=#a3be8c
palette = 3=#ebcb8b
palette = 4=#81a1c1
palette = 5=#b48ead
palette = 6=#88c0d0
palette = 7=#e5e9f0
palette = 8=#4c566a
palette = 9=#bf616a
palette = 10=#a3be8c
palette = 11=#ebcb8b
palette = 12=#81a1c1
palette = 13=#b48ead
palette = 14=#8fbcbb
palette = 15=#eceff4`}
      />

      <H2>Font</H2>
      <P>
        Uniterm bundles{' '}
        <Strong>CaskaydiaMono Nerd Font</Strong> with full Nerd Font glyph
        coverage (icons, box drawing, braille). To use a different font, set{' '}
        <code>font-family</code> in <code>uniterm.conf</code> or pick from
        the Appearance dropdown — Uniterm enumerates installed system fonts.
      </P>

      <H2>Background opacity</H2>
      <P>
        Set <code>background-opacity</code> in <code>uniterm.conf</code> to a
        value between <code>0.0</code> and <code>1.0</code>. The window
        becomes translucent, blurring whatever's behind it (where the
        platform supports it).
      </P>

      <Callout variant="note" title="WSL color fidelity">
        Truecolor (24-bit SGR) end-to-end is supported under WSL via
        ConPTY's <code>PASSTHROUGH_MODE</code>. If colors look quantized,
        ensure you're on Windows 11 22H2+ — earlier ConPTY builds clamp to
        16 colors.
      </Callout>
    </>
  );
}
