import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, OL, P, Strong, UL } from '../components/Prose';

export function Tasks() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Tasks</H1>
      <Lede>
        A task is the unit of agent work in Uniterm. You name an outcome,
        optionally attach a workflow and success criteria, and every agent
        run, command, validation check, and touched file is recorded
        against it. The Manage Tasks window is a kanban over all your
        tasks; each task can also recur on an interval.
      </Lede>

      <Callout variant="note" title="Renamed from Goals">
        Tasks were called Goals before the 2026-04 rename. Existing data
        migrates losslessly on first launch — Uniterm reads the legacy{' '}
        <code>agent_goals.json</code>, writes a new <code>tasks.json</code>,
        and leaves the old file as a backup. JSON-RPC methods, IPC types,
        and Rust structs were renamed in step.
      </Callout>

      <H2>Why tasks exist</H2>
      <P>
        Agents do a lot in a session — edit files, run tests, ask
        questions, wait for approvals. Without a frame, that activity is a
        wall of scrollback. A task gives the work a title, a place to
        accumulate evidence, and a position in your plan. When the agent
        says "done," you can see what actually happened and decide whether
        to accept it.
      </P>

      <H2>The Manage Tasks window</H2>
      <P>
        Press <KeyChord keys={['Mod', 'Shift', 'T']} /> (or use the sidebar
        button labelled <em>Manage tasks</em>) to open the kanban. Four
        columns:
      </P>
      <UL>
        <LI>
          <Strong>Not now</Strong> — parked tasks, including recurring
          tasks waiting for their next due time.
        </LI>
        <LI>
          <Strong>Now</Strong> — tasks you intend to work on next. New
          tasks land here by default.
        </LI>
        <LI>
          <Strong>In progress</Strong> — derived from status, not triage.
          A task lands here automatically while its workflow run is{' '}
          <code>running</code>, <code>waiting</code>, or{' '}
          <code>validating</code>.
        </LI>
        <LI>
          <Strong>Done</Strong> — completed, cancelled, failed, or
          manually triaged to Done.
        </LI>
      </UL>
      <P>
        Drag a card to reorder within a column or to move between columns.
        Dropping a task with agent-run history into <em>Done</em> opens a
        confirmation that any non-terminal status is cancelled, so a
        background workflow can't wake the task back up.
      </P>
      <P>
        Each column except <em>In progress</em> and <em>Done</em> has a
        quick-add input — type a title, press Enter, and a draft task is
        created in the active workspace at the top of the column.
      </P>
      <P>
        The header has a workspace selector, status-pill filters{' '}
        (<code>draft</code>, <code>ready</code>, <code>running</code>,{' '}
        <code>waiting</code>, <code>validating</code>), a search box, and
        a <Strong>New task</Strong> button.
      </P>

      <H2>Triage vs. status</H2>
      <P>
        Triage and status are separate fields:
      </P>
      <UL>
        <LI>
          <Strong>Triage</Strong> (<code>now</code>, <code>not_now</code>,{' '}
          <code>done</code>) is where the task <em>belongs</em> in your
          plan. You set it.
        </LI>
        <LI>
          <Strong>Status</Strong> (<code>draft</code>, <code>ready</code>,
          {' '}<code>running</code>, <code>waiting</code>,{' '}
          <code>validating</code>, <code>completed</code>,{' '}
          <code>cancelled</code>, <code>failed</code>) is what's{' '}
          <em>happening</em>. The runtime sets it.
        </LI>
      </UL>
      <P>
        The kanban surfaces both: status wins for the In progress column
        (you always see what's executing), triage wins everywhere else.
        Engine states like <code>draft</code> or <code>ready</code> are
        never columns themselves — they're pills you can filter by.
      </P>

      <H2>Creating a task</H2>
      <P>
        Press <KeyChord keys={['Mod', 'Shift', 'G']} /> (or use the
        command palette: <code>new task</code>). The dialog asks for:
      </P>
      <OL>
        <LI>
          <Strong>Workspace and Project</Strong>. Leave the project as{' '}
          <em>Workspace goal</em> if the work spans projects.
        </LI>
        <LI>
          <Strong>Goal</Strong>. The first line is the title shown in
          lists. Lines below feed agent prompts as longer context
          (constraints, risks, preferences).
        </LI>
        <LI>
          <Strong>Workflow</Strong> (optional). When picked, the dialog
          shows a <em>Roles &amp; agents</em> disclosure where you confirm
          the agent for each role. The disclosure auto-expands when any
          pane lacks a default or carries an{' '}
          <code>allowed_agents</code> constraint.
        </LI>
        <LI>
          <Strong>Success criteria</Strong> (optional). One check per
          line. Becomes a checklist agents and reviewers can tick off.
        </LI>
        <LI>
          <Strong>Advanced</Strong>. Worktree mode (do the work on an
          isolated git branch), recurrence interval, and per-launch
          permission flags for Claude Code.
        </LI>
      </OL>

      <H3>Worktree mode</H3>
      <P>
        Toggle <Strong>Worktree mode</Strong> in the Advanced section to
        run the task in an isolated git worktree:
      </P>
      <UL>
        <LI>Creates a worktree at <code>../{`{repo}`}.task-{`{slug}`}/</code></LI>
        <LI>Branches from your current HEAD with the task slug as the branch name</LI>
        <LI>Spawns subsequent agent runs against the worktree</LI>
        <LI>Records checkpoints automatically as work progresses</LI>
      </UL>
      <Callout variant="tip" title="Why worktrees">
        Tasks that change a lot of files benefit from worktree isolation —
        you can keep working on <code>main</code> while the agent works in
        parallel. Validation evidence still attaches to the task, and
        checkpoints let you roll back to any prior state.
      </Callout>

      <H3>Recurrence</H3>
      <P>
        Set an interval in days to make the task repeat. On completion the
        task slides to <em>Not now</em>; once <code>nextDueAt</code> has
        passed, the runtime flips it back to <em>Now</em> on its next
        scheduler tick (every 60 s while the app is open). Missed cycles
        are dropped — you don't get a backlog of overdue runs from a long
        offline period; the task just resurfaces once.
      </P>
      <P>
        Recurring workflow tasks reuse the same per-role agent picks, so
        the next iteration launches without re-picking.
      </P>

      <H2>Status lifecycle</H2>
      <UL>
        <LI><code>draft</code> — created, no workflow attached or no agent runs yet</LI>
        <LI><code>ready</code> — set up and ready for agents to start</LI>
        <LI><code>running</code> — at least one agent run is active</LI>
        <LI><code>waiting</code> — paused on user input or approval</LI>
        <LI><code>validating</code> — work claims done, evidence is being checked</LI>
        <LI><code>completed</code> — all criteria satisfied; the task moves to Done</LI>
        <LI><code>cancelled</code> / <code>failed</code> — terminal states</LI>
      </UL>

      <H2>Validation evidence</H2>
      <P>
        Every command an attached agent runs can be recorded as evidence
        against a criterion. Evidence kinds:
      </P>
      <UL>
        <LI><Strong>command</Strong> — a shell command, exit code, duration</LI>
        <LI><Strong>test</Strong> — a test run with pass/fail counts</LI>
        <LI><Strong>lint</Strong> / <Strong>build</Strong> — toolchain checks</LI>
        <LI><Strong>screenshot</Strong> — UI capture (manual or via the browser pane)</LI>
        <LI><Strong>diff</Strong> — file changes within the task's scope</LI>
        <LI><Strong>artifact</Strong> — link to a generated file</LI>
        <LI><Strong>manual_review</Strong> — your own pass/fail note</LI>
      </UL>
      <P>
        Each evidence entry carries provenance:{' '}
        <code>user</code>, <code>workflow</code>, <code>agent</code>, or{' '}
        <code>artifact</code> — visible as a badge in the Validate panel
        so automatic records are distinguishable from manual ones.
      </P>

      <H2>Task events</H2>
      <P>
        Tasks emit a structured event stream. Useful for postmortems,
        billing analyses, or feeding back into agent memory. Events flow
        through the{' '}
        <Link
          to="/docs/observatory"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Observatory
        </Link>{' '}
        Timeline tab, and the panel header has an export action.
      </P>
      <CodeBlock
        language="text"
        code={`task_created
task_status_changed
workflow_started / workflow_status_changed
agent_run_updated
attention_resolved / answer_sent
permission_decision / review_decision
memory_updated / steering_action / instruction_sent
validation_evidence_added
files_touched
checkpoint_created / checkpoint_restored
task_completed`}
      />
      <P>
        The exported schema is{' '}
        <code>uniterm.task-event-log.v1</code>, with redacted text fields
        and stable IDs. See the{' '}
        <Link
          to="/docs/configuration"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Configuration
        </Link>{' '}
        page for the on-disk location of the event log.
      </P>
    </>
  );
}
