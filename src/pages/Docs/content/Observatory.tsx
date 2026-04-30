import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Observatory() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Observatory</H1>
      <Lede>
        Observatory is a real-time control panel for every agent, task, and
        workflow in your workspace. Instead of reading scrollback to figure
        out what an agent is doing, you see structured status, costs, file
        changes, and pending decisions at a glance — and you can approve,
        answer, or steer without ever leaving the panel.
      </Lede>

      <Callout variant="tip" title="Why this matters">
        Terminals make agent activity opaque. A 200-line tool call vanishes
        upward, "waiting for permission" looks like "stuck", and three
        agents in three panes mean three separate attention surfaces.
        Observatory is the seam between agent autonomy and human control —
        the place you check in, intervene, and move on.
      </Callout>

      <H2>Opening Observatory</H2>
      <P>
        Observatory docks as a resizable panel on the right edge of the
        window. Open and close it three ways:
      </P>
      <UL>
        <LI>
          Press <KeyChord keys={['Mod', 'Shift', 'O']} />
        </LI>
        <LI>
          Open the command palette (<KeyChord keys={['Mod', 'K']} />) and
          run <code>Toggle Observatory</code>
        </LI>
        <LI>
          Use the <Strong>View</Strong> menu →{' '}
          <Strong>Toggle Observatory</Strong>
        </LI>
      </UL>
      <P>
        Drag the left edge to resize between 400 and 1200 pixels. The panel
        also auto-opens to its{' '}
        <Strong>Waiting</Strong> tab when an agent needs your attention — so
        permission requests and questions surface without you having to
        switch context.
      </P>

      <H2>The six tabs</H2>

      <H3>Overview</H3>
      <P>
        The default view. Five sections at a glance:
      </P>
      <UL>
        <LI>
          <Strong>Active Agents</Strong> — every running agent pane with its
          status (idle, running tool, permission requested, question asked,
          error), current task, token count, and estimated USD cost
        </LI>
        <LI>
          <Strong>Token Telemetry</Strong> — workspace-wide totals plus
          breakdown by task and by agent, with prompt vs. completion split
        </LI>
        <LI>
          <Strong>Workflow Flow</Strong> — when a workflow is running, a
          live diagram of its roles (e.g. Planner → Engineer → Verifier)
          with colored status dots and a review gate at the end
        </LI>
        <LI>
          <Strong>Dev Servers</Strong> — auto-detected{' '}
          <code>localhost:*</code> URLs from agent and shell output, with
          one-click <em>Open in browser pane</em>, <em>Open externally</em>,
          and <em>Copy URL</em>
        </LI>
        <LI>
          <Strong>Tasks</Strong> — collapsible lists of active tasks and
          recent history, with quick drill-down into files, memory, and
          checkpoints
        </LI>
      </UL>

      <H3>Waiting</H3>
      <P>
        The action tab. A badge on the tab title shows the count of items
        that need you. Five categories:
      </P>
      <UL>
        <LI>
          <Strong>Permission requests</Strong> — agent asks before
          performing a sensitive action. Approve or deny inline; the
          decision is delivered to the agent immediately.
        </LI>
        <LI>
          <Strong>Questions</Strong> — free-form questions from the agent.
          Answer in a textarea; the response goes back to the pane.
        </LI>
        <LI>
          <Strong>Markers</Strong> — sticky terminal markers (e.g.{' '}
          <code>[NEEDS_USER_INPUT]</code>) emitted by the agent. Mark
          handled or reply.
        </LI>
        <LI>
          <Strong>Agent waiting</Strong> — a task's agent run is paused
          waiting for a "continue" signal. One-click resume.
        </LI>
        <LI>
          <Strong>Validation</Strong> — when a workflow's verifier
          finishes, a review gate appears with the verifier's findings.
          Approve and complete the task, send back to the engineer or
          planner (optionally with new instructions), cancel, or mark as
          failed. An iteration counter caps at 3 to prevent loops.
        </LI>
      </UL>
      <P>
        Every waiting item has a <em>Focus</em> button that jumps to the
        originating pane and closes Observatory — so you can always drop
        back into the raw terminal if you'd rather respond there.
      </P>

      <H3>Timeline</H3>
      <P>
        A filterable, chronological feed of every task event in the
        workspace: state changes, permissions, questions, answers,
        instructions, steering actions, review decisions, completions, and
        failures. Filter by task, agent, event type, or severity. Useful
        for postmortems, audit trails, and "what happened while I was at
        lunch" reviews.
      </P>

      <H3>Validate</H3>
      <P>
        The history of validation and review runs. Each entry shows the
        verifier's verdict, the iteration that produced it, and the
        decision you (or the workflow) made afterwards. Pair this with the
        Tasks page's{' '}
        <Link
          to="/docs/tasks"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          validation evidence
        </Link>{' '}
        to see the full provenance of a completed task.
      </P>

      <H3>Files</H3>
      <P>
        Workspace-level summary of every file an agent has touched: counts
        of unique paths, checkpoints created, worktrees spun up. Drill into
        any task to see exactly which files were modified and which
        checkpoints recorded the changes.
      </P>

      <H3>Memory</H3>
      <P>
        Workspace memory is a Markdown file agents read on session start
        and can append to as they learn. The Memory tab is where you
        manage it:
      </P>
      <UL>
        <LI>
          <Strong>Memory proposals</Strong> — agents suggest edits with a
          diff preview. Accept to promote, dismiss to skip.
        </LI>
        <LI>
          <Strong>Workspace memory editor</Strong> — direct editor for the
          curated memory file.
        </LI>
        <LI>
          <Strong>Workflow artifacts</Strong> — read-only links to the
          plan, review, fix, and other Markdown files agents wrote into{' '}
          <code>.uniterm/workflow/</code> during runs.
        </LI>
        <LI>
          <Strong>Project learnings</Strong> — per-task promotion controls
          for promoting outcomes, patterns, and context into
          project-scoped memory.
        </LI>
      </UL>

      <H2>Exporting and steering</H2>
      <P>
        The export button in the panel header writes the current
        workspace's event log to JSON (schema{' '}
        <code>uniterm.task-event-log.v1</code>) — useful for analyses,
        billing reconciliation, or feeding back into agent context.
      </P>
      <P>
        Beyond the Waiting tab, you can also send free-form{' '}
        <em>instructions</em> into a running task from the Overview — type
        a directive and the active agent receives it as a steering message
        without losing its current context.
      </P>

      <Callout variant="note" title="One panel, one workspace">
        Observatory always reflects the active workspace. Switch workspaces
        in the sidebar selector and the panel updates instantly — different
        agents, different tasks, different timeline. Cross-workspace views
        are not on the roadmap; the workspace boundary is the unit of
        attention by design.
      </Callout>
    </>
  );
}
