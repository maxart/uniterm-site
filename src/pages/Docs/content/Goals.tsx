import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import {
  H1,
  H2,
  H3,
  Lede,
  LI,
  OL,
  P,
  Strong,
  UL,
} from '../components/Prose';

export function Goals() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Goals</H1>
      <Lede>
        A Goal is the unit of agent work in Uniterm. You define an outcome,
        attach success criteria, and every agent run, command, validation
        check, and touched file is recorded against it. Think of it as a job
        ticket the terminal can reason about.
      </Lede>

      <H2>Why Goals exist</H2>
      <P>
        Agents do a lot in a session — edit files, run tests, ask questions,
        wait for approvals. Without a frame, that activity is a wall of
        scrollback. A Goal gives the work a title, an outcome, and a place to
        accumulate evidence. When the agent says "done", you can see what
        actually happened and decide whether to accept it.
      </P>

      <H2>Anatomy of a Goal</H2>
      <UL>
        <LI><Strong>Workspace</Strong> and <Strong>Project</Strong> scope</LI>
        <LI>A short <Strong>title</Strong></LI>
        <LI>A longer <Strong>description</Strong> with context and constraints</LI>
        <LI>A list of <Strong>success criteria</Strong> (one per line)</LI>
        <LI>An optional <Strong>workflow template</Strong></LI>
        <LI>An optional <Strong>git worktree</Strong> for isolation</LI>
        <LI>
          One or more <Strong>agent runs</Strong> attached as the work
          progresses
        </LI>
        <LI>
          A <Strong>validation evidence</Strong> log: command exits, test
          results, screenshots, manual reviews
        </LI>
      </UL>

      <H2>A practical example: "Add workspace memory support"</H2>
      <P>
        Walk through it with the dialog open. Press{' '}
        <KeyChord keys={['Mod', 'K']} /> and pick{' '}
        <Strong>New Goal</Strong> (or right-click a project in the sidebar).
      </P>

      <H3>1. Scope</H3>
      <P>
        Pick the workspace and the project. If the work spans multiple
        projects, leave the project as <em>Workspace goal</em>. For our
        example we'll scope to a single project — call it{' '}
        <code>uniterm</code>.
      </P>

      <H3>2. Title and description</H3>
      <P>
        Keep the title short — it shows up in goal lists and headers.
        Description is the place to put context, constraints, risks, or
        preferences agents should know.
      </P>

      <CodeBlock
        language="text"
        filename="New Goal · Title"
        code={`Add workspace memory support`}
      />
      <CodeBlock
        language="text"
        filename="New Goal · Description"
        code={`Persist a per-workspace memory file that agents can read on session
start and append to as they work. Memory should:

- Live at .uniterm/memory.md inside each workspace
- Be loaded into agent context on session_start
- Be append-only from agents (no destructive edits)
- Be visible and editable in the sidebar Memory panel

Out of scope: cross-workspace memory, encryption, sync.`}
      />

      <H3>3. Success criteria</H3>
      <P>
        One check per line. Each line becomes a criterion that an agent or a
        reviewer can mark satisfied. These are also the gates that the
        Validate panel uses to surface progress.
      </P>

      <CodeBlock
        language="text"
        filename="New Goal · Success criteria"
        code={`Memory file is created at .uniterm/memory.md on first save
Agents see memory contents in their initial prompt
Memory panel renders contents and supports inline edit
New tests cover load, append, and rename paths
TypeScript and ESLint pass with zero new warnings
docs/agentic-workflows-build-plan.md updated with the change`}
      />

      <H3>4. (Optional) Pick a workflow</H3>
      <P>
        If your project has workflow templates configured, you can pick one
        from the combobox. Workflow templates pre-arrange agents into roles
        ("plan", "implement", "review") and can include a parameterized
        starter prompt. For this example, leave it on{' '}
        <em>No workflow</em> — we'll attach Claude Code manually.
      </P>

      <H3>5. (Optional) Worktree</H3>
      <P>
        Toggle <Strong>Use git worktree</Strong> to do the work on an isolated
        branch without disrupting your current checkout. Uniterm:
      </P>
      <OL>
        <LI>Creates a worktree at <code>../uniterm.goal-{`{slug}`}/</code></LI>
        <LI>Branches from your current HEAD with the goal slug as branch name</LI>
        <LI>Spawns subsequent agent runs against that worktree</LI>
        <LI>Records checkpoints automatically as work progresses</LI>
      </OL>
      <Callout variant="tip" title="Why worktrees">
        Goals that change a lot of files benefit from worktree isolation —
        you can keep working on <code>main</code> while the agent works in
        parallel. Validation evidence still attaches to the goal, and
        checkpoints let you roll back to any prior state.
      </Callout>

      <H3>6. Submit</H3>
      <P>
        Click <Strong>Create Goal</Strong>. The dialog closes; the goal
        appears in the project's goal list. Right-click the goal or open it
        from the goal panel to:
      </P>
      <UL>
        <LI><Strong>Attach an agent run</Strong> — pick a pane (or spawn a new one) and the agent will start with goal context in its prompt</LI>
        <LI><Strong>Run a workflow</Strong> — pre-built or user-defined</LI>
        <LI><Strong>Add evidence</Strong> manually — for example, attach a screenshot to a UI criterion</LI>
        <LI><Strong>Mark a criterion satisfied</Strong> — agents can also do this via the IPC bridge</LI>
        <LI><Strong>Complete the goal</Strong> — once every criterion is satisfied, the goal flips to <code>completed</code> and the worktree (if any) is ready to merge</LI>
      </UL>

      <H2>Goal status lifecycle</H2>
      <UL>
        <LI><code>draft</code> — created, no agents attached yet</LI>
        <LI><code>ready</code> — set up and ready for agents to start</LI>
        <LI><code>running</code> — at least one agent run is active</LI>
        <LI><code>waiting</code> — paused on user input or approval</LI>
        <LI><code>validating</code> — work claims done, evidence is being checked</LI>
        <LI><code>completed</code> — all criteria satisfied</LI>
        <LI><code>cancelled</code> / <code>failed</code> — terminal states</LI>
      </UL>

      <H2>Validation evidence</H2>
      <P>
        Every command an attached agent runs can be recorded as evidence
        against a criterion. Evidence types:
      </P>
      <UL>
        <LI><Strong>command</Strong> — a shell command, exit code, duration</LI>
        <LI><Strong>test</Strong> — a test run with pass/fail counts</LI>
        <LI><Strong>lint</Strong> / <Strong>build</Strong> — toolchain checks</LI>
        <LI><Strong>screenshot</Strong> — UI capture (manual or via the browser pane)</LI>
        <LI><Strong>diff</Strong> — file changes within the goal's scope</LI>
        <LI><Strong>artifact</Strong> — link to a generated file</LI>
        <LI><Strong>manual_review</Strong> — your own pass/fail note</LI>
      </UL>
      <P>
        Each evidence entry carries provenance: <code>user</code>,{' '}
        <code>workflow</code>, <code>agent</code>, or <code>artifact</code>.
        That way you can tell automatic records apart from manual ones at a
        glance.
      </P>

      <H2>Goal events</H2>
      <P>
        Behind the scenes, goals emit a structured event stream you can
        export. Useful for postmortems, billing analyses, or feeding back into
        agent memory:
      </P>
      <CodeBlock
        language="bash"
        code={`# Export every goal event in the current workspace
uniterm export goal-events --workspace=current --out=events.json`}
      />
      <P>
        The exported schema is{' '}
        <code>uniterm.goal-event-log.v1</code>, with redacted text fields
        and stable IDs. See the{' '}
        <Link
          to="/docs/configuration"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Configuration
        </Link>{' '}
        page for export locations.
      </P>

      <Callout variant="note" title="The CLI helper">
        The standalone <code>uniterm</code> CLI is part of the phase-two
        roadmap. Today, exports are accessible from the goal context menu in
        the UI.
      </Callout>
    </>
  );
}
