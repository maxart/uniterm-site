import { Callout } from '../components/Callout';
import { KeyChord } from '../components/Kbd';
import { H1, H2, Lede, P, Strong } from '../components/Prose';

interface BindingRow {
  action: string;
  keys: string[];
}

const SECTIONS: { title: string; bindings: BindingRow[] }[] = [
  {
    title: 'Tabs and windows',
    bindings: [
      { action: 'New tab in active project', keys: ['Mod', 'T'] },
      { action: 'Next tab', keys: ['Mod', ']'] },
      { action: 'Previous tab', keys: ['Mod', '['] },
      { action: 'Tab by index', keys: ['Mod', '1 – 9'] },
      { action: 'Last-used tab (any project)', keys: ['Ctrl', 'Tab'] },
      { action: 'Close pane / tab', keys: ['Mod', 'W'] },
      { action: 'Toggle sidebar', keys: ['Mod', 'B'] },
    ],
  },
  {
    title: 'Splits and panes',
    bindings: [
      { action: 'Split right', keys: ['Mod', 'D'] },
      { action: 'Split down', keys: ['Mod', 'Shift', 'D'] },
      { action: 'Focus pane left', keys: ['Mod', 'Alt', '←'] },
      { action: 'Focus pane right', keys: ['Mod', 'Alt', '→'] },
      { action: 'Focus pane up', keys: ['Mod', 'Alt', '↑'] },
      { action: 'Focus pane down', keys: ['Mod', 'Alt', '↓'] },
      { action: 'Find in pane', keys: ['Mod', 'F'] },
    ],
  },
  {
    title: 'Projects',
    bindings: [
      { action: 'Open project picker', keys: ['Mod', 'O'] },
      { action: 'Command palette', keys: ['Mod', 'K'] },
      { action: 'Open settings', keys: ['Mod', ','] },
    ],
  },
];

export function Keyboard() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Customization
      </p>
      <H1>Keyboard Shortcuts</H1>
      <Lede>
        Default bindings for every common action. <Strong>Mod</Strong> is{' '}
        <KeyChord keys={['⌘']} /> on macOS and <KeyChord keys={['Ctrl']} />{' '}
        on Windows and Linux.
      </Lede>

      {SECTIONS.map((section) => (
        <section key={section.title} className="mb-8">
          <H2>{section.title}</H2>
          <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--color-surface-2)] text-[var(--color-fg-muted)]">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Action</th>
                  <th className="px-4 py-2.5 font-medium">Binding</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--color-surface)]">
                {section.bindings.map((row) => (
                  <tr
                    key={row.action}
                    className="border-t border-[var(--color-border)] first:border-t-0"
                  >
                    <td className="px-4 py-2.5 text-[var(--color-fg)]">
                      {row.action}
                    </td>
                    <td className="px-4 py-2.5">
                      <KeyChord keys={row.keys} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <H2>Rebinding</H2>
      <P>
        Open <Strong>Settings → Keymaps</Strong>. Click any binding to enter
        capture mode, then press the key combination you want. Uniterm warns
        if the combination clashes with an existing binding.
      </P>
      <P>
        Ten core actions are user-rebindable today: new tab, close pane,
        split right, split down, toggle sidebar, find in pane, command
        palette, open settings, focus left, focus right. The remaining
        bindings are fixed and follow OS conventions.
      </P>

      <Callout variant="note" title="No multi-chord bindings yet">
        tmux-style sequences like <KeyChord keys={['Mod', 'A']} />{' '}
        <KeyChord keys={['T']} /> aren't supported. All bindings fire on a
        single chord.
      </Callout>
    </>
  );
}
