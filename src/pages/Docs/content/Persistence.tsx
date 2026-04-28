import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { H1, H2, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Persistence() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Core Concepts
      </p>
      <H1>Persistence</H1>
      <Lede>
        Uniterm saves your layout automatically. Close the app and re-open it
        — your workspaces, projects, tabs, splits, and focused pane all
        return.
      </Lede>

      <H2>What persists</H2>
      <UL>
        <LI>
          The list of{' '}
          <Link
            to="/docs/workspaces"
            className="text-[var(--color-accent)] underline underline-offset-4"
          >
            workspaces
          </Link>{' '}
          and which one is active
        </LI>
        <LI>Each workspace's projects, in their sidebar order</LI>
        <LI>Each project's open tabs, in their tab-strip order</LI>
        <LI>The split tree for each tab, including divider ratios</LI>
        <LI>The focused pane within each tab</LI>
        <LI>Goals, success criteria, and validation evidence</LI>
        <LI>App-wide settings (theme, keymaps, default shell, font)</LI>
      </UL>

      <H2>What does not persist</H2>
      <UL>
        <LI>
          <Strong>Running shell processes</Strong>. PTYs end when the app
          quits. New panes start fresh shells.
        </LI>
        <LI>
          <Strong>Scrollback history</Strong>. Buffers reset on relaunch.
        </LI>
        <LI>
          <Strong>Live agent state</Strong>. Agent sessions don't resume —
          you re-launch the agent and continue the conversation in its own
          history (most agents have their own session storage).
        </LI>
      </UL>

      <H2>How it works</H2>
      <P>
        Layout state is debounced and written to disk every 500 ms. Snapshots
        are JSON, structurally compatible with Macterm, and live in your
        platform's app-data directory:
      </P>
      <UL>
        <LI>
          <Strong>macOS</Strong>:{' '}
          <code>~/Library/Application Support/com.uniterm.app/</code>
        </LI>
        <LI>
          <Strong>Linux</Strong>: <code>~/.config/com.uniterm.app/</code>
        </LI>
        <LI>
          <Strong>Windows</Strong>: <code>%APPDATA%\com.uniterm.app\</code>
        </LI>
      </UL>

      <Callout variant="tip" title="Portable layouts">
        Snapshots are plain JSON. You can copy a workspace's layout file to
        another machine to mirror your setup. Per-pane state is keyed by
        stable IDs, so the layout reproduces faithfully.
      </Callout>

      <H2>What's coming</H2>
      <P>
        Per-project agent session resumption (last prompt, agent role per
        pane) is on the phase-two roadmap, along with a chat-style sidebar
        for Agent Client Protocol agents and per-workspace shared memory.
        Today, agent state lives inside each agent's own conversation file —
        Uniterm restores the layout, you restore the dialogue.
      </P>
    </>
  );
}
