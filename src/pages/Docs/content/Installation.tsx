import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { H1, H2, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Installation() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Get Started
      </p>
      <H1>Installation</H1>
      <Lede>
        Uniterm ships signed installers for macOS, Windows, and Linux. The app
        is free, runs locally, and never requires an account.
      </Lede>

      <Callout variant="note" title="Pre-alpha">
        Uniterm is in private pre-alpha. Builds are sent directly to a small
        group of testers — there is no public download yet. If you don't have
        a build link, you're not on the list yet.
      </Callout>

      <H2>Requirements</H2>
      <UL>
        <LI>
          <Strong>macOS</Strong> 12 Monterey or newer (Apple Silicon and
          Intel; universal build)
        </LI>
        <LI>
          <Strong>Windows</Strong> 10 1809+ with ConPTY. Windows 11 22H2+ is
          recommended for full 24-bit color fidelity.
        </LI>
        <LI>
          <Strong>Linux</Strong> x64. Ubuntu 22.04+ or any distribution with
          WebKitGTK 4.1.
        </LI>
      </UL>

      <H2>macOS</H2>
      <P>
        Open the <code>.dmg</code> file you received, then drag{' '}
        <strong>Uniterm</strong> into <code>/Applications</code>. The first
        launch may prompt Gatekeeper — right-click the app and choose{' '}
        <em>Open</em>.
      </P>

      <H2>Windows</H2>
      <P>
        Run the <code>.msi</code> installer you received. Uniterm auto-detects
        every installed WSL distribution and shows them in{' '}
        <strong>Settings → Shells</strong>.
      </P>
      <Callout variant="tip" title="WSL agents">
        On Windows, AI agents installed inside WSL are detected automatically.
        You can run Claude Code from your Ubuntu distro alongside a native
        PowerShell pane in the same tab.
      </Callout>

      <H2>Linux</H2>
      <P>
        Three packages are produced for each build:
      </P>
      <UL>
        <LI>
          <code>.deb</code> for Debian, Ubuntu, and derivatives
        </LI>
        <LI>
          <code>.rpm</code> for Fedora, openSUSE, and derivatives
        </LI>
        <LI>
          <code>.AppImage</code> for any distribution (no install required)
        </LI>
      </UL>

      <CodeBlock
        language="bash"
        filename="Debian / Ubuntu"
        code={`sudo apt install ./uniterm_x.y.z_amd64.deb`}
      />
      <CodeBlock
        language="bash"
        filename="Fedora"
        code={`sudo dnf install ./uniterm-x.y.z.x86_64.rpm`}
      />

      <Callout variant="warning" title="Wayland">
        On some Wayland desktops, the global tab-cycle hotkey is unavailable
        until an xdg-portal fallback is added. All in-window shortcuts work
        normally.
      </Callout>
    </>
  );
}
