import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Layouts() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Layouts</H1>
      <Lede>
        A layout spawns a pre-arranged set of panes — agents, shells, or both
        — in one click. Layouts are agent-agnostic: each pane suggests an
        agent, and you pick which one runs there at apply time. Picks are
        remembered the next time you use the layout.
      </Lede>

      <Callout variant="note" title="Layouts vs. workflows">
        Layouts only arrange panes. They do not coordinate hand-offs between
        agents, wait for files, or produce verdicts.{' '}
        <strong>Workflows</strong> add roles and orchestration on top —
        Planner → Engineer → Reviewer with a runner driving each step.
      </Callout>

      <H2>Using a layout</H2>
      <P>
        Press <KeyChord keys={['Mod', 'K']} />, type{' '}
        <code>new tab from layout</code>, and pick one. Uniterm builds the
        splits, opens the pane-by-pane agent picker so you can confirm
        choices, then launches each pane.
      </P>
      <P>
        To pin a layout to a project, right-click the project in the sidebar
        and choose <em>Set default layout...</em>. From then on, new tabs in
        that project apply the chosen layout automatically — including the
        per-pane agent picks you saved. Hold{' '}
        <KeyChord keys={['Shift']} /> while pressing{' '}
        <KeyChord keys={['Mod', 'T']} /> to opt out for a single tab.
      </P>

      <H2>Bundled layouts</H2>
      <UL>
        <LI>
          <code>solo-claude</code> — one pane running an agent. Defaults to
          Claude Code; pick any installed agent at apply time.
        </LI>
        <LI>
          <code>claude-shell</code> — agent on the left, plain shell on the
          right.
        </LI>
        <LI>
          <code>pair-review</code> — two agents side-by-side for cross-review.
          Defaults to Claude on the left, Codex on the right.
        </LI>
        <LI>
          <code>claude-opencode-shell</code> — agent on the left (full
          height); right column has a second agent on top and a shell below.
        </LI>
        <LI>
          <code>triad</code> — three agents in a 50/25/25 split: one on the
          left, two stacked on the right.
        </LI>
        <LI>
          <code>windows-claude-wsl</code> — Windows-only. Agent routed
          through your default WSL distro on the left, native PowerShell on
          the right.
        </LI>
      </UL>
      <P>
        Every bundled layout's <code>default_agent</code> is just a
        suggestion. The picker lists every installed agent that meets the
        layout's <code>allowed_agents</code> constraint (if any).
      </P>

      <H2>Custom layouts</H2>
      <P>
        Layouts are TOML files in the layouts directory. Uniterm scans this
        directory on launch and on demand:
      </P>
      <UL>
        <LI><Strong>macOS / Linux</Strong>: <code>~/.config/uniterm/layouts/</code></LI>
        <LI><Strong>Windows</Strong>: <code>%APPDATA%\uniterm\layouts\</code></LI>
      </UL>
      <P>
        A user file with the same <code>id</code> as a bundled layout
        overrides it.
      </P>

      <H3>Example: agent + shell</H3>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/layouts/agent-shell.toml"
        code={`id = "agent-shell"
name = "Agent + shell (2 panes)"
description = "An agent on the left, a regular shell on the right."
tags = ["shell"]

[[panes]]
id = "left"
default_agent = "claude-code"
allowed_agents = ["claude-code", "opencode", "codex", "gemini", "kiro", "hermes", "openclaw"]

[[panes]]
id = "right"
split = { from = "left", direction = "right", size = 0.5 }`}
      />

      <H3>Example: triad (50/25/25)</H3>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/layouts/triad.toml"
        code={`id = "triad"
name = "Triad (3 panes)"
description = "Three agents — one on the left, two stacked on the right."
tags = ["multi-agent"]

[[panes]]
id = "left"
default_agent = "claude-code"

[[panes]]
id = "right-top"
default_agent = "codex"
split = { from = "left", direction = "right", size = 0.5 }

[[panes]]
id = "right-bottom"
default_agent = "opencode"
split = { from = "right-top", direction = "down", size = 0.5 }`}
      />

      <H2>Schema</H2>
      <P>
        Every layout is a list of <code>[[panes]]</code> tables. The first
        pane is the root; every subsequent pane declares how it splits off
        an existing pane.
      </P>

      <H3>Top-level fields</H3>
      <UL>
        <LI><code>id</code> — unique identifier; used in the palette and to override bundled layouts</LI>
        <LI><code>name</code> — human-readable label</LI>
        <LI><code>description</code> — short summary shown beneath the name</LI>
        <LI><code>tags</code> — optional array used for grouping</LI>
        <LI><code>platforms</code> — optional array, e.g. <code>["windows"]</code>; layouts only apply on listed platforms</LI>
      </UL>

      <H3>Pane fields</H3>
      <UL>
        <LI><code>id</code> — unique within the layout; used as the parent reference for splits</LI>
        <LI>
          <code>default_agent</code> — agent id the picker pre-selects
          (e.g. <code>claude-code</code>, <code>opencode</code>,{' '}
          <code>codex</code>, <code>gemini</code>, <code>aider</code>,{' '}
          <code>kiro</code>, <code>hermes</code>, <code>openclaw</code>).
          Optional — without it the picker forces a choice.
        </LI>
        <LI>
          <code>allowed_agents</code> — optional array. When set, restricts
          the picker to listed ids. Misspelled ids are ignored.
        </LI>
        <LI>
          <code>shell</code> — explicit shell override (e.g.{' '}
          <code>pwsh.exe</code>). Mutually exclusive with{' '}
          <code>default_agent</code>.
        </LI>
        <LI>
          <code>shell_args</code> — optional array of args passed to{' '}
          <code>shell</code>.
        </LI>
        <LI>
          <code>initial_prompt</code> — text typed into the pane after the
          shell or agent is ready. Variable placeholders{' '}
          <code>{`{{name}}`}</code> are filled from <code>vars</code>.
        </LI>
        <LI>
          <code>split</code> — required on every pane except the first.
          Inline table: <code>{`{ from, direction, size }`}</code>. See
          below.
        </LI>
        <LI>
          <code>role</code> — adding this turns the file into a workflow.
          Layouts must omit it.
        </LI>
      </UL>

      <H3>Split semantics</H3>
      <P>
        <code>split.from</code> is the <code>id</code> of the parent pane.{' '}
        <code>split.direction</code> is <code>right</code> (horizontal split)
        or <code>down</code> (vertical split). <code>split.size</code> is the
        fraction of the parent's space allocated to the <em>new</em> pane.
      </P>
      <P>
        Splits compose recursively: a 33/33/33 column is{' '}
        <code>size = 0.667</code> on the first split (the new pane gets two
        thirds), then <code>size = 0.5</code> on a second split inside that
        pane.
      </P>

      <H2>Legacy <code>agent</code> alias</H2>
      <P>
        Layout files written before the 2026-04 rename used{' '}
        <code>agent = "..."</code> instead of <code>default_agent</code>.
        Both keys still work; the parser mirrors them and emits a one-shot
        warning so you can migrate at your leisure.
      </P>

      <Callout variant="tip" title="Reloading layouts">
        After editing a layout file, open <Strong>Settings → Config</Strong>{' '}
        and click <Strong>Reload</Strong> so new tabs pick up the change.
        Some changes may require an app restart.
      </Callout>
    </>
  );
}
