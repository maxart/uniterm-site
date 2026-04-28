import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Workspaces() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Core Concepts
      </p>
      <H1>Workspaces</H1>
      <Lede>
        A workspace is the top-level container in Uniterm. It groups projects,
        tabs, and (soon) shared memory for a distinct area of work — Work,
        Personal, Client A, Research, whatever fits.
      </Lede>

      <H2>The hierarchy</H2>
      <P>
        Uniterm organizes everything in four layers:
      </P>

      <CodeBlock
        language="text"
        code={`Workspace          (e.g. "Work")
└── Project        (e.g. ~/code/uniterm)
    └── Tab        (e.g. "Feature: memory")
        └── Pane   (e.g. Claude Code)`}
      />

      <P>
        Each workspace keeps its own list of projects. A project can be moved
        or copied between workspaces from the sidebar context menu, but at any
        moment it lives in exactly one. Tabs and panes belong to a project;
        the active workspace decides which projects are visible in the
        sidebar.
      </P>

      <H2>The workspace selector</H2>
      <P>
        At the top of the sidebar is the workspace selector. Click it to:
      </P>
      <UL>
        <LI>Switch between workspaces</LI>
        <LI>Create a new workspace</LI>
        <LI>Rename or remove an existing workspace</LI>
      </UL>
      <P>
        Switching workspaces swaps the entire sidebar — different projects,
        different tabs, different active pane. It does not close anything; the
        previous workspace's tabs are simply hidden until you switch back.
      </P>

      <H2>Creating your first workspace</H2>
      <P>
        Uniterm starts with a default workspace called{' '}
        <em>Default</em>. To make a new one:
      </P>
      <UL>
        <LI>
          Click the workspace selector at the top of the sidebar, then choose{' '}
          <Strong>+ New workspace</Strong>.
        </LI>
        <LI>
          Or open the command palette (<KeyChord keys={['Mod', 'K']} />) and
          run <code>new workspace</code>.
        </LI>
      </UL>
      <P>
        Pick a broad container name. Good names are coarse-grained:{' '}
        <em>Work</em>, <em>Personal</em>, <em>Client A</em>,{' '}
        <em>Research</em>. Keep narrower distinctions (a particular feature
        branch, a specific debugging session) for tabs within a project.
      </P>

      <Callout variant="tip" title="When to add a workspace">
        Add a workspace when projects shouldn't live next to each other —
        different employers, different security boundaries, or work that needs
        a clean sidebar. If projects belong to the same area of work, keep
        them in the same workspace.
      </Callout>

      <H2>Workspaces, projects, and goals</H2>
      <P>
        Both <Link
          to="/docs/projects"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >projects</Link>{' '}
        and <Link
          to="/docs/goals"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >goals</Link>{' '}
        scope to a workspace. When you create a goal, the dialog asks for a
        workspace first, then a project (or <em>Workspace goal</em> if the
        work spans multiple projects).
      </P>
      <P>
        Future Uniterm releases will add per-workspace memory — a place agents
        can read context on session start and append notes as they work.
        Memory will be scoped to its workspace, so a workspace boundary is
        also a memory boundary.
      </P>

      <H3>Settings</H3>
      <P>
        Open <Strong>Settings → Workspaces</Strong> to see every workspace,
        the projects each contains, and per-workspace defaults (default
        template, default workflow). Renaming a workspace here is the same as
        renaming from the sidebar selector.
      </P>
    </>
  );
}
