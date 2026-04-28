import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, OL, P, Strong, UL } from '../components/Prose';

export function Quickstart() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Get Started
      </p>
      <H1>Quickstart</H1>
      <Lede>
        Open your first project, split a pane, and run an AI agent — in about
        five minutes. Uniterm reads as a terminal but acts as a workspace; this
        is the shortest path to feeling that.
      </Lede>

      <H2>1. Pick a workspace</H2>
      <P>
        At the top of the sidebar is the workspace selector. Uniterm starts
        with a default workspace called <em>Default</em> — fine for your
        first session, but most people set up at least one named workspace
        per area of work (e.g. <em>Work</em>, <em>Personal</em>,{' '}
        <em>Client A</em>).
      </P>
      <OL>
        <LI>
          Click the workspace selector at the top of the sidebar.
        </LI>
        <LI>
          Choose <Strong>+ New workspace</Strong> and give it a broad name.
        </LI>
      </OL>
      <P>
        Workspaces are containers — they group projects, tabs, and (soon)
        shared memory. Read more in{' '}
        <Link
          to="/docs/workspaces"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Workspaces
        </Link>
        .
      </P>

      <H2>2. Add a project</H2>
      <OL>
        <LI>
          Click <Strong>+ New Project</Strong> at the bottom of the sidebar.
        </LI>
        <LI>
          Pick a folder. Uniterm uses it as the project root and the default
          working directory for new panes. The project lives in your active
          workspace.
        </LI>
        <LI>
          Double-click the project name to rename it. Right-click for context
          actions (close, set default template, move to another workspace,
          reveal in Finder/Explorer).
        </LI>
      </OL>

      <P>
        Each project keeps its own tabs, splits, and focused pane. Switch
        projects from the sidebar; close Uniterm and re-open it, and your
        layout returns exactly as you left it.
      </P>

      <H2>3. Split your first pane</H2>
      <P>
        A new project opens with one tab and one pane. To split the focused
        pane horizontally:
      </P>
      <P>
        <KeyChord keys={['Mod', 'D']} /> splits to the right.{' '}
        <KeyChord keys={['Mod', 'Shift', 'D']} /> splits down.
      </P>
      <P>
        <Strong>Mod</Strong> is{' '}
        <KeyChord keys={['⌘']} /> on macOS and{' '}
        <KeyChord keys={['Ctrl']} /> on Windows and Linux. Move focus between
        panes with <KeyChord keys={['Mod', 'Alt', '←']} />,{' '}
        <KeyChord keys={['→']} />, <KeyChord keys={['↑']} />,{' '}
        <KeyChord keys={['↓']} />. Drag any divider to resize.
      </P>
      <P>
        Close the focused pane with <KeyChord keys={['Mod', 'W']} />. If the
        pane is running a process, Uniterm asks for confirmation first.
      </P>

      <H2>4. Run an AI agent</H2>
      <OL>
        <LI>
          Open the command palette with <KeyChord keys={['Mod', 'K']} />.
        </LI>
        <LI>
          Type <code>run claude</code> (or <code>run codex</code>,{' '}
          <code>run gemini</code>, etc.) and press <KeyChord keys={['Enter']} />.
        </LI>
        <LI>
          Pick the shell. The agent spawns in a new pane with{' '}
          <code>UNITERM_CLI_AGENT_PROTOCOL_VERSION</code> in its environment;
          its status pill updates live as it runs tools and waits for input.
        </LI>
      </OL>

      <Callout variant="tip" title="Don't have the agent installed?">
        Open <Strong>Settings → AI</Strong>. Uniterm probes your{' '}
        <code>PATH</code>, version managers (mise, asdf, nvm, fnm, pnpm,
        bun), and any WSL distros for installed agents. Click{' '}
        <Strong>Install</Strong> next to one that's missing — Uniterm runs the
        agent's official installer for you.
      </Callout>

      <H2>5. Open a layout template</H2>
      <P>
        Templates spawn pre-arranged multi-pane workspaces with agents
        attached. Press <KeyChord keys={['Mod', 'K']} />, type{' '}
        <code>new tab from template</code>, and pick one:
      </P>
      <UL>
        <LI>
          <code>claude-shell</code> — Claude Code in one pane, a shell in the
          other
        </LI>
        <LI>
          <code>claude-opencode-pair</code> — Claude on the left, OpenCode on
          the right
        </LI>
        <LI>
          <code>triad</code> — Claude, Codex, and Gemini side by side
        </LI>
        <LI>
          <code>ai-council</code> — Advocate / Skeptic / Synthesizer roles
        </LI>
      </UL>
      <P>
        See <Link
          to="/docs/templates"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >Layout Templates</Link>{' '}
        for the full list and how to define your own.
      </P>

      <H2>6. Define a Goal</H2>
      <P>
        A Goal is the unit of agent work in Uniterm. You name an outcome,
        attach success criteria, optionally pick a workflow template — and
        every agent run, validation check, and touched file is recorded
        against it.
      </P>
      <P>
        Press <KeyChord keys={['Mod', 'K']} />, type <code>new goal</code>,
        and press Enter. We'll walk through the dialog field-by-field on the{' '}
        <Link
          to="/docs/goals"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Goals page
        </Link>
        .
      </P>

      <H3>What's next</H3>
      <UL>
        <LI>
          Pick a theme in <Strong>Settings → Appearance</Strong> — see{' '}
          <Link
            to="/docs/themes"
            className="text-[var(--color-accent)] underline underline-offset-4"
          >
            Themes
          </Link>
          .
        </LI>
        <LI>
          Rebind shortcuts in <Strong>Settings → Keymaps</Strong> — see{' '}
          <Link
            to="/docs/keyboard"
            className="text-[var(--color-accent)] underline underline-offset-4"
          >
            Keyboard Shortcuts
          </Link>
          .
        </LI>
        <LI>
          Edit <code>uniterm.conf</code> directly — see{' '}
          <Link
            to="/docs/configuration"
            className="text-[var(--color-accent)] underline underline-offset-4"
          >
            Configuration
          </Link>
          .
        </LI>
      </UL>
    </>
  );
}
