import { ArrowRight } from 'lucide-react';

import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { H1, H2, Lede, P, Strong, UL, LI } from '../components/Prose';

export function Welcome() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        Get Started
      </p>
      <H1>Welcome to Uniterm</H1>
      <Lede>
        Uniterm is a local-first terminal multiplexer built for agentic
        engineering. Run unlimited split panes, orchestrate AI coding agents,
        and keep every project in its own persistent workspace — all on your
        machine, no account required.
      </Lede>

      <H2>What you can do with Uniterm</H2>
      <UL>
        <LI>
          <Strong>Split your terminal</Strong> into any layout. Run a build, an
          editor, and an agent side-by-side — with draggable dividers and
          directional focus.
        </LI>
        <LI>
          <Strong>Run AI coding agents</Strong> like Claude Code, Codex, Gemini
          CLI, OpenCode, aider, Hermes, Kiro, and OpenClaw — with auto-detected
          installations and a live status pill on every pane.
        </LI>
        <LI>
          <Strong>Track work as Tasks</Strong>. Define an outcome, attach a
          workflow and success criteria, triage on a kanban, and watch
          validation evidence pile up as agents work.
        </LI>
        <LI>
          <Strong>Steer agents from the Observatory</Strong>. A live
          control panel for every agent, task, and workflow — approve
          permissions, answer questions, and review verifier output without
          leaving the panel.
        </LI>
        <LI>
          <Strong>Restore everything on launch</Strong>. Projects, tabs,
          splits, and active panes are saved automatically.
        </LI>
        <LI>
          <Strong>Customize freely</Strong>. 21+ bundled themes plus any
          Ghostty-compatible theme on disk. Rebind shortcuts. Pick your
          shell — including any WSL distro on Windows.
        </LI>
      </UL>

      <H2>How these docs are organized</H2>
      <P>
        We start with installation and a 5-minute quickstart, then walk through
        the core concepts (projects, panes, persistence). The AI Features
        section covers agents, tasks, layouts, and workflows. The
        Customization section covers themes, keymaps, and the{' '}
        <code>uniterm.conf</code> file.
      </P>

      <Callout variant="tip" title="Where to start">
        New to Uniterm? Read{' '}
        <Link
          to="/docs/installation"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Installation
        </Link>{' '}
        and{' '}
        <Link
          to="/docs/quickstart"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Quickstart
        </Link>{' '}
        first. Already installed and want to set up your first AI task?
        Jump straight to{' '}
        <Link
          to="/docs/tasks"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          Tasks
        </Link>
        .
      </Callout>

      <H2>Status</H2>
      <P>
        Uniterm is in <Strong>private pre-alpha</Strong>. The core
        multiplexer, agent runners, themes, tasks, layouts, and workflows
        are stable. Some surfaces (auto-update, in-pane chat sidebar,
        command-block rendering, OSC 52 clipboard) are being polished.
        Builds go out directly to testers — release notes ship alongside
        each build.
      </P>

      <div className="mt-10">
        <Link
          to="/docs/installation"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-white/30 hover:bg-white/[0.08]"
        >
          Install Uniterm
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </>
  );
}
