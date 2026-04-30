import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, OL, P, Strong, UL } from '../components/Prose';

export function Workflows() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Workflows</H1>
      <Lede>
        A workflow coordinates multiple agents around a single objective.
        Each pane has a role — Planner, Engineer, Reviewer, Advocate,
        Skeptic — and the workflow runner drives the hand-off, waiting for
        one role to go idle before activating the next. Workflows are
        agent-agnostic: you pick which agent runs each role, and Uniterm
        remembers your picks.
      </Lede>

      <Callout variant="note" title="Workflows vs. layouts">
        Both are TOML files that spawn multi-pane setups. The difference is
        the <code>role</code> field on each pane: a layout has none and is
        just a static arrangement; a workflow has roles and is driven by the
        runtime that watches each pane and injects the next role's prompt
        when the previous one signals ready.
      </Callout>

      <H2>Running a workflow</H2>
      <OL>
        <LI>
          Press <KeyChord keys={['Mod', 'Shift', 'G']} /> to open the New
          Task dialog (or use <KeyChord keys={['Mod', 'K']} /> →{' '}
          <em>New task</em>).
        </LI>
        <LI>
          Pick a project, give the task a title, and pick a workflow from
          the combobox.
        </LI>
        <LI>
          The <Strong>Roles &amp; agents</Strong> section auto-expands when
          a pane lacks a default or carries an{' '}
          <code>allowed_agents</code> constraint. Confirm or change the
          agent for each role.
        </LI>
        <LI>
          If the workflow has variables (e.g.{' '}
          <code>run_objective</code>), Uniterm prompts for them.
        </LI>
        <LI>
          Click <Strong>Start task</Strong>. Uniterm builds the splits,
          launches each agent, and the runner kicks off the first role.
        </LI>
      </OL>
      <P>
        You can also start a workflow directly from the command palette
        (<code>new tab from layout</code> → workflow row), without creating
        a task. The task is the persistence surface; the workflow is the
        execution layer.
      </P>

      <H2>How the runner works</H2>
      <P>
        Each role pane runs an agent. The runner injects role 1's{' '}
        <code>initial_prompt</code> as soon as the agent is idle; when the
        agent's notify-protocol status flips back to idle (typically after
        the agent prints its <code>READY</code> sentinel), the runner moves
        on to role 2. Roles can read each other's output files — typically
        under <code>.uniterm/workflow/</code> — to coordinate.
      </P>
      <P>
        For workflows that end in a <Strong>Reviewer</Strong>, the runner
        watches for a <code>verify.md</code> with a YAML{' '}
        <code>verdict:</code> field. Verdicts of <code>fix</code> or{' '}
        <code>replan</code> open a review gate in the{' '}
        <Link
          to="/docs/observatory"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Observatory
        </Link>{' '}
        Waiting tab so you decide whether to send the work back, approve
        anyway, or cancel.
      </P>

      <H2>Bundled workflows</H2>
      <UL>
        <LI>
          <code>plan-exec-verify</code> — Planner writes{' '}
          <code>plan.md</code>, Engineer implements it, Reviewer writes{' '}
          <code>verify.md</code> with a verdict.
        </LI>
        <LI>
          <code>brainstorm-to-plan</code> — Brainstormer explores the
          problem space; Planner commits to a step-by-step plan.
        </LI>
        <LI>
          <code>tdd-loop</code> — Test-Writer (red), Implementer (green),
          Refactorer. One failing test per round.
        </LI>
        <LI>
          <code>review-fix-verify</code> — Reviewer flags issues, Fixer
          addresses them, Verifier confirms.
        </LI>
        <LI>
          <code>ai-council</code> — Advocate and Skeptic write in parallel
          (no cross-read); Synthesizer produces a decision artifact with a
          confidence rating and a falsifier.
        </LI>
        <LI>
          <code>appsec-review</code> — Application reviewer (web/API/LLM
          surface) and Infrastructure reviewer (cloud/IaC/supply chain) run
          in parallel; Verifier consolidates.
        </LI>
        <LI>
          <code>red-blue-purple</code> — Red Team plans an attack chain
          mapped to MITRE ATT&amp;CK; Blue Team plans detections; Purple
          Team reconciles into a coverage-delta verdict.
        </LI>
      </UL>
      <P>
        The security workflows are paper exercises: agents are instructed
        not to execute exploits, scan hosts, or modify systems. Treat
        target inputs as untrusted.
      </P>

      <H2>Custom workflows</H2>
      <P>
        Workflows are TOML files in the workflows directory:
      </P>
      <UL>
        <LI><Strong>macOS / Linux</Strong>: <code>~/.config/uniterm/workflows/</code></LI>
        <LI><Strong>Windows</Strong>: <code>%APPDATA%\uniterm\workflows\</code></LI>
      </UL>

      <H3>Example: brainstorm → plan</H3>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/workflows/brainstorm-to-plan.toml"
        code={`id = "brainstorm-to-plan"
name = "Brainstorm / Plan (2 panes)"
description = "Brainstormer explores; Planner commits to steps."
tags = ["multi-agent", "roles", "workflow"]

[[vars]]
name = "run_objective"
description = "What should this workflow run explore?"
required = true

[[panes]]
id = "brainstorm"
default_agent = "claude-code"
role = "brainstormer"
initial_prompt = """
You are the Brainstormer.

Run objective: {{run_objective}}

Explore the problem space freely. Surface constraints, unknowns,
trade-offs, and 2-3 plausible approaches. Do NOT commit to a plan.

Write your exploration to .uniterm/workflow/brainstorm.md, then reply
with BRAINSTORM READY on its own line.
"""

[[panes]]
id = "plan"
default_agent = "claude-code"
role = "planner"
split = { from = "brainstorm", direction = "down", size = 0.5 }
initial_prompt = """
You are the Planner. The Brainstormer has written
.uniterm/workflow/brainstorm.md.

Run objective: {{run_objective}}

Pick one approach. Write a concrete, step-by-step plan to
.uniterm/workflow/plan.md, then reply with PLAN READY on its own line.
"""`}
      />

      <H2>Schema</H2>

      <H3>Top-level fields</H3>
      <UL>
        <LI><code>id</code> — unique identifier; user files override bundled ids</LI>
        <LI><code>name</code> — human-readable label</LI>
        <LI><code>description</code> — short summary</LI>
        <LI><code>tags</code> — optional array</LI>
        <LI>
          <code>vars</code> — optional list of <code>[[vars]]</code> tables.
          Each has <code>name</code>, <code>description</code>, and{' '}
          <code>required</code>. The Apply dialog prompts for required vars
          before launching.
        </LI>
      </UL>

      <H3>Pane fields</H3>
      <UL>
        <LI><code>id</code> — unique within the workflow</LI>
        <LI>
          <code>role</code> — required. Naming a role makes the pane part of
          the runner's hand-off chain. Roles are referenced in{' '}
          <code>initial_prompt</code>s and persisted in{' '}
          <code>workflowAgentPreferences</code>.
        </LI>
        <LI>
          <code>default_agent</code> — agent id the picker pre-selects.
          Optional; without it the user must pick before submitting.
        </LI>
        <LI>
          <code>allowed_agents</code> — optional array restricting the
          picker. Set this when correctness depends on agent-specific
          features (today: notify-protocol idle detection).
        </LI>
        <LI>
          <code>initial_prompt</code> — multi-line string typed into the
          pane when the runner activates the role. Supports{' '}
          <code>{`{{name}}`}</code> placeholders from <code>vars</code>.
        </LI>
        <LI>
          <code>split</code> — required on every pane except the first.
          Inline table: <code>{`{ from, direction, size }`}</code>.
        </LI>
      </UL>
      <P>
        Bundled workflows whose advancement depends on notify-protocol idle
        detection (<code>plan-exec-verify</code>, <code>tdd-loop</code>,{' '}
        <code>review-fix-verify</code>, <code>appsec-review</code>,{' '}
        <code>red-blue-purple</code>) ship with the seven notify-capable
        agent ids in <code>allowed_agents</code>:{' '}
        <code>claude-code</code>, <code>opencode</code>, <code>codex</code>,
        {' '}<code>gemini</code>, <code>kiro</code>, <code>hermes</code>,{' '}
        <code>openclaw</code>. Workflows whose advancement reads files
        instead (<code>ai-council</code>, <code>brainstorm-to-plan</code>)
        leave <code>allowed_agents</code> unset so any agent fits.
      </P>

      <H2>Agent picks are remembered</H2>
      <P>
        Picks are saved per <code>(workflowId, role)</code>. The next time
        you start the workflow with the same role, the picker pre-selects
        your last choice. The resolver order is:
      </P>
      <OL>
        <LI>An apply-time pick made in the dialog</LI>
        <LI>A previously-saved preference for this <code>(workflow, role)</code></LI>
        <LI>The workflow's <code>default_agent</code></LI>
        <LI>The first installed agent that fits <code>allowed_agents</code></LI>
        <LI>None — Submit is disabled until you pick</LI>
      </OL>
      <P>
        Manage saved picks in <Strong>Settings → Workflows</Strong>. Each
        workflow has a <em>Configure default agents</em> disclosure with a
        per-role inline editor and a <em>Reset</em> button to drop the
        saved pick.
      </P>

      <H2>Legacy <code>agent</code> alias</H2>
      <P>
        Workflow files written before the 2026-04 rename used{' '}
        <code>agent = "..."</code> instead of <code>default_agent</code>.
        Both keys still work; the parser mirrors them. Migrate when
        convenient.
      </P>

      <H2>Recurring workflow tasks</H2>
      <P>
        Tasks can repeat on an interval (see{' '}
        <Link
          to="/docs/tasks"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Tasks
        </Link>
        ). When a recurring task fires, the same per-role agent picks are
        reused — no re-picking required. Change a pick once in Settings →
        Workflows and every future iteration inherits it.
      </P>

      <Callout variant="tip" title="Reloading workflows">
        After editing a workflow file, open{' '}
        <Strong>Settings → Config</Strong> and click{' '}
        <Strong>Reload</Strong>. Some changes may require an app restart.
      </Callout>
    </>
  );
}
