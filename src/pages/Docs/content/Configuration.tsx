import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Configuration() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Customization
      </p>
      <H1>Configuration</H1>
      <Lede>
        Most settings live in the Settings UI. Power users can edit{' '}
        <code>uniterm.conf</code> directly — its format is compatible with
        Ghostty, so existing configs port over with no changes.
      </Lede>

      <H2>The Settings UI</H2>
      <P>
        Open it with <code>Mod + ,</code>. Tabs:
      </P>
      <UL>
        <LI><Strong>Appearance</Strong> — theme, font, cursor, opacity, scrollback</LI>
        <LI><Strong>Behavior</Strong> — process-close confirmation, IME support</LI>
        <LI><Strong>Workspaces</Strong> — list workspaces and the projects each contains</LI>
        <LI><Strong>AI agents</Strong> — install / toggle / configure agents</LI>
        <LI><Strong>AI workflows</Strong> — manage saved per-role agent picks for each workflow</LI>
        <LI><Strong>AI steering</Strong> — global agent-steering preferences</LI>
        <LI><Strong>Layouts</Strong> — view bundled and user layouts</LI>
        <LI><Strong>Shells</Strong> — pick your default shell from the auto-detected list; Restart WSL service on Windows</LI>
        <LI><Strong>Keyboard Shortcuts</Strong> — rebind shortcuts, see duplicate warnings</LI>
        <LI><Strong>Config</Strong> — show config path, reload from disk</LI>
      </UL>
      <P>
        Every change in the UI is written to disk immediately. There's no
        Apply button.
      </P>

      <H2>uniterm.conf</H2>
      <P>
        The main config file lives at:
      </P>
      <UL>
        <LI><Strong>macOS</Strong>: <code>~/Library/Application Support/com.uniterm.app/uniterm.conf</code></LI>
        <LI><Strong>Linux</Strong>: <code>~/.config/com.uniterm.app/uniterm.conf</code></LI>
        <LI><Strong>Windows</Strong>: <code>%APPDATA%\com.uniterm.app\uniterm.conf</code></LI>
      </UL>
      <P>
        On first launch, Uniterm seeds the file from{' '}
        <code>~/.config/ghostty/config</code> if one exists, otherwise from
        sane defaults.
      </P>

      <H3>Example configuration</H3>

      <CodeBlock
        language="ini"
        filename="uniterm.conf"
        code={`# Theme
theme = "catppuccin-mocha"
background-opacity = 0.95

# Font
font-family = "JetBrainsMono Nerd Font"
font-size = 13
cursor-style = "block"

# Behavior
scrollback-limit = 10000

# Per-color overrides (optional)
palette = 0=#1e1e2e
palette = 1=#f38ba8
palette = 2=#a6e3a1
palette = 3=#f9e2af
palette = 4=#89b4fa
palette = 5=#cba6f7
palette = 6=#94e2d5
palette = 7=#bac2de`}
      />

      <H3>Keys</H3>
      <UL>
        <LI><code>theme</code> — bundled name or custom theme filename</LI>
        <LI><code>background</code>, <code>foreground</code> — root colors (overrides theme)</LI>
        <LI><code>cursor-color</code>, <code>selection-background</code>, <code>selection-foreground</code></LI>
        <LI><code>palette = N=#rrggbb</code> — override an ANSI color (0–15)</LI>
        <LI><code>background-opacity</code> — <code>0.0</code> to <code>1.0</code></LI>
        <LI><code>font-family</code>, <code>font-size</code></LI>
        <LI><code>cursor-style</code> — <code>block</code>, <code>bar</code>, <code>underline</code></LI>
        <LI><code>scrollback-limit</code> — lines retained per pane</LI>
      </UL>

      <Callout variant="tip" title="Reloading config">
        After hand-editing <code>uniterm.conf</code>, open{' '}
        <Strong>Settings → Config</Strong> and click{' '}
        <Strong>Reload</Strong> to pick up the new theme and font in open
        panes. Some changes may require an app restart.
      </Callout>

      <H2>Other config locations</H2>
      <UL>
        <LI>
          <code>~/.config/uniterm/layouts/</code> — multi-pane layout TOML files
        </LI>
        <LI>
          <code>~/.config/uniterm/workflows/</code> — multi-agent workflow TOML files
        </LI>
        <LI>
          <code>~/.config/uniterm/agents/</code> — custom agent definitions
        </LI>
        <LI>
          <code>~/.config/ghostty/themes/</code> — custom themes
        </LI>
      </UL>
      <P>
        On Windows, <code>~/.config/...</code> maps to{' '}
        <code>%APPDATA%\...</code>. User files override bundled ones with
        the same <code>id</code>. Some changes may require an app restart
        to be picked up.
      </P>

      <H2>Shell integration</H2>
      <P>
        Uniterm reads two standard escape sequences from your shell:
      </P>
      <UL>
        <LI>
          <Strong>OSC 7</Strong> — current working directory. Uniterm uses
          this to track the live <code>cwd</code> per pane, useful for the
          window title and future "open in editor" actions.
        </LI>
        <LI>
          <Strong>OSC 133</Strong> — semantic prompt zones (command start /
          end / exit code). Parsed today; rendered as collapsible blocks in a
          future release.
        </LI>
      </UL>
      <P>
        Most modern shells emit these natively (zsh/fish with built-in
        integration; bash with a small startup snippet). Nothing to enable on
        Uniterm's side.
      </P>
    </>
  );
}
