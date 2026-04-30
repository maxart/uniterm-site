import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { KeyChord } from '../components/Kbd';
import { H1, H2, Lede, LI, OL, P, Strong, UL } from '../components/Prose';

export function Projects() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Core Concepts
      </p>
      <H1>Projects & Tabs</H1>
      <Lede>
        A project is a folder you've added to the sidebar of a{' '}
        <Link
          to="/docs/workspaces"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          workspace
        </Link>
        . Each project keeps its own tabs, splits, and active pane.
      </Lede>

      <H2>The sidebar</H2>
      <P>
        The left sidebar lists every project in the active workspace. Switch
        workspaces with the selector at the top of the sidebar; the project
        list swaps to match. Each project can be collapsed to hide its tabs.
        Toggle the entire sidebar with <KeyChord keys={['Mod', 'B']} />.
      </P>
      <P>
        At the bottom of the sidebar are two buttons:{' '}
        <Strong>+ New Project</Strong> opens a folder picker (the project is
        added to the active workspace), and the gear icon opens settings.
        Open an existing project anytime with <KeyChord keys={['Mod', 'O']} />.
      </P>
      <P>
        Right-click a project to <em>Move to workspace</em> or{' '}
        <em>Copy to workspace</em>. Moving updates the source workspace;
        copying leaves the original in place and adds a duplicate to the
        target.
      </P>

      <H2>Tabs within a project</H2>
      <P>
        Tabs are how you separate work streams in the same repo. A typical
        layout:
      </P>
      <UL>
        <LI>
          One tab per feature branch, each with its own splits — agent on the
          left, terminal on the right
        </LI>
        <LI>
          A scratch tab for one-off commands, log tailing, or quick checks
        </LI>
        <LI>
          A "review" tab with <code>git diff</code> and the test runner
        </LI>
      </UL>

      <P>
        Open a new tab in the active project with{' '}
        <KeyChord keys={['Mod', 'T']} />. Switch tabs with{' '}
        <KeyChord keys={['Mod', ']']} /> and{' '}
        <KeyChord keys={['Mod', '[']} />, or jump to a tab by index with{' '}
        <KeyChord keys={['Mod', '1']} /> through{' '}
        <KeyChord keys={['Mod', '9']} />.{' '}
        <KeyChord keys={['Ctrl', 'Tab']} /> jumps to the last-used tab,
        including across projects.
      </P>

      <H2>Naming and reordering</H2>
      <OL>
        <LI>
          <Strong>Rename</Strong>: double-click the project or tab name.
        </LI>
        <LI>
          <Strong>Context menu</Strong>: right-click for actions like{' '}
          <em>Close project</em>, <em>Reveal in Finder/Explorer</em>,{' '}
          <em>Open in text editor...</em>, and{' '}
          <em>Set default layout...</em>.
        </LI>
        <LI>
          <Strong>Default layout</Strong>: when set, opening a new tab in
          this project applies the chosen{' '}
          <Link
            to="/docs/layouts"
            className="text-[var(--color-accent)] underline underline-offset-4"
          >
            layout
          </Link>{' '}
          automatically — including the per-pane agent picks you saved.
          Hold <KeyChord keys={['Shift']} /> while pressing{' '}
          <KeyChord keys={['Mod', 'T']} /> to opt out for this tab.
        </LI>
      </OL>

      <Callout variant="note" title="Project order is fixed for now">
        The sidebar list isn't drag-to-reorder yet. New projects append to the
        bottom; closed projects remain in their original position when
        re-opened.
      </Callout>

      <H2>Per-project settings</H2>
      <P>
        Each project records:
      </P>
      <UL>
        <LI>The list of open tabs and their split tree</LI>
        <LI>The currently focused pane</LI>
        <LI>The default layout (if you've set one), plus the saved per-pane agent picks for it</LI>
        <LI>
          Tasks scoped to this project — see{' '}
          <Link
            to="/docs/tasks"
            className="text-[var(--color-accent)] underline underline-offset-4"
          >
            Tasks
          </Link>
        </LI>
      </UL>
      <P>
        Workspace state is persisted to disk every 500 ms (debounced).
        Re-opening Uniterm restores everything except the running shell
        processes, which start fresh.
      </P>
    </>
  );
}
