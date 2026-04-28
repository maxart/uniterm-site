import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Panes() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Core Concepts
      </p>
      <H1>Panes & Splits</H1>
      <Lede>
        Panes are the unit of work inside a tab. They can run shells, AI
        agents, or — on macOS and Windows — a native browser. Splits compose
        them into any layout.
      </Lede>

      <H2>Splitting</H2>
      <P>
        Press <KeyChord keys={['Mod', 'D']} /> to split the focused pane to
        the right. Press <KeyChord keys={['Mod', 'Shift', 'D']} /> to split
        downward. Splits nest: split the right pane down, and the left pane up,
        and you get a 4-quadrant grid.
      </P>

      <CodeBlock
        language="text"
        filename="A common 3-pane layout"
        code={`+------------------+----------------+
|                  |                |
|  Claude Code     |  npm run dev   |
|  (left, full)    |  (top right)   |
|                  +----------------+
|                  |                |
|                  |  npm test --   |
|                  |  watch         |
|                  |  (bot. right)  |
+------------------+----------------+`}
      />

      <P>
        Achieve this by opening Claude Code on the left, splitting right
        (<KeyChord keys={['Mod', 'D']} />) for the dev server, then with that
        right pane focused, splitting down (<KeyChord keys={['Mod', 'Shift', 'D']} />)
        for the test runner.
      </P>

      <H2>Navigating between panes</H2>
      <P>
        Move focus geometrically with{' '}
        <KeyChord keys={['Mod', 'Alt', '←']} />,{' '}
        <KeyChord keys={['Mod', 'Alt', '→']} />,{' '}
        <KeyChord keys={['Mod', 'Alt', '↑']} />, and{' '}
        <KeyChord keys={['Mod', 'Alt', '↓']} />. Uniterm picks the pane in
        the indicated direction with weighted axial preference, so the right
        thing usually happens.
      </P>
      <P>
        Find text inside the focused pane with{' '}
        <KeyChord keys={['Mod', 'F']} />. Type to filter scrollback; use{' '}
        <KeyChord keys={['Enter']} /> and the arrow buttons to navigate
        matches. <KeyChord keys={['Esc']} /> closes the search bar.
      </P>

      <H2>Resizing</H2>
      <P>
        Each divider has a 5-pixel hit area. Drag to resize neighboring panes;
        click the divider to display the current ratio. Splits remember their
        ratios across restarts.
      </P>

      <H2>Closing panes</H2>
      <P>
        Close the focused pane with <KeyChord keys={['Mod', 'W']} />. If the
        pane's child process is still alive (a long build, an SSH session, an
        agent thinking), Uniterm shows a confirmation dialog. You can disable
        confirmation in <Strong>Settings → Behavior</Strong>.
      </P>
      <Callout variant="warning" title="Closing a tab closes its panes">
        Closing the last pane in a tab closes the tab. Closing the last tab in
        a project closes the project's workspace (the project itself stays in
        the sidebar).
      </Callout>

      <H2>Per-pane shell</H2>
      <P>
        Right-click a pane and choose <em>New pane with shell</em> to spawn
        the next pane with a different shell. Available choices include every
        shell on your <code>PATH</code> (bash, zsh, fish, pwsh, cmd) and every
        WSL distribution on Windows.
      </P>

      <H2>Browser panes</H2>
      <P>
        On macOS and Windows, you can right-click a pane and choose{' '}
        <em>Open in new browser pane</em> to spawn a native WebView pane.
        Useful for inspecting <code>localhost:3000</code> next to the dev
        server output. On WSL, the action falls back to opening in your system
        browser.
      </P>

      <H3>Limits</H3>
      <UL>
        <LI>One browser pane per tab.</LI>
        <LI>
          New splits start in the project root, not the focused pane's current
          working directory. (Synchronizing OSC 7 CWD into new splits is on
          the roadmap.)
        </LI>
        <LI>
          Sixel and inline image rendering aren't enabled yet — text and
          truecolor only.
        </LI>
      </UL>
    </>
  );
}
