import { Link } from '@/lib/router';

import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Agents() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>AI Agents</H1>
      <Lede>
        Uniterm runs the major AI coding agents as native panes — with live
        status, one-click installation, and zero glue code on your end.
      </Lede>

      <H2>Supported agents</H2>
      <UL>
        <LI><Strong>Claude Code</Strong> (Anthropic)</LI>
        <LI><Strong>Codex</Strong> (OpenAI)</LI>
        <LI><Strong>Gemini CLI</Strong> (Google)</LI>
        <LI><Strong>OpenCode</Strong></LI>
        <LI><Strong>aider</Strong></LI>
        <LI><Strong>Hermes</Strong></LI>
        <LI><Strong>Kiro</Strong></LI>
        <LI><Strong>OpenClaw</Strong></LI>
      </UL>
      <P>
        Each agent runs as a regular shell process inside a pane. Uniterm sets
        an environment variable and listens for status events; if your agent
        of choice supports the protocol, you'll see its activity in the pane
        header.
      </P>

      <H2>Running an agent</H2>
      <P>
        The fastest path: open the command palette with{' '}
        <KeyChord keys={['Mod', 'K']} />, type <code>run</code> followed by
        the agent name, and press <KeyChord keys={['Enter']} />. Uniterm
        prompts you for the shell, then spawns the agent in a new pane.
      </P>
      <P>
        You can also right-click a pane and choose{' '}
        <em>Replace with agent</em> to swap in an agent without moving panes
        around.
      </P>

      <H2>Installing missing agents</H2>
      <P>
        Open <Strong>Settings → AI</Strong>. Uniterm probes:
      </P>
      <UL>
        <LI>Your shell <code>PATH</code></LI>
        <LI>
          Version managers: nvm, fnm, mise, asdf, pnpm, bun, deno
        </LI>
        <LI>Every WSL distribution on Windows</LI>
      </UL>
      <P>
        Each agent shows up with its detected version (or an{' '}
        <Strong>Install</Strong> button if missing). Clicking Install runs the
        agent's official installer in your default shell — the same command
        you'd run by hand, just one click instead.
      </P>

      <H2>The agent status pill</H2>
      <P>
        Every agent pane has a status indicator in its header. As the agent
        runs, the pill updates live:
      </P>
      <UL>
        <LI><code>idle</code> — waiting for input</LI>
        <LI><code>running tool</code> — executing a tool call (e.g. bash, edit, web)</LI>
        <LI><code>waiting for permission</code> — needs your approval to continue</LI>
        <LI><code>question</code> — asking you something</LI>
        <LI><code>error</code> — last attempt failed</LI>
      </UL>
      <P>
        Status comes from the OSC 777 escape sequence protocol. Any agent that
        emits these notifications is supported automatically. The fallback
        envelopes (<code>warp://cli-agent</code>,{' '}
        <code>cli-agent://cli-agent</code>) are also recognized for
        compatibility.
      </P>

      <H2>The protocol</H2>
      <P>
        If you're integrating a custom agent, emit OSC 777 events with this
        envelope:
      </P>

      <CodeBlock
        language="text"
        filename="OSC 777 status event"
        code={`ESC ] 777 ; notify ; uniterm://cli-agent ; <JSON> BEL`}
      />

      <P>
        The JSON payload supports <code>event</code>,{' '}
        <code>current_task</code>, <code>status</code>,{' '}
        <code>prompt_tokens</code>, <code>completion_tokens</code>, and{' '}
        <code>estimated_cost_usd</code>. Recognized event names include{' '}
        <code>session_start</code>, <code>prompt_submit</code>,{' '}
        <code>tool_start</code>, <code>tool_end</code>,{' '}
        <code>permission_request</code>, <code>idle</code>,{' '}
        <code>question</code>, <code>session_end</code>, and{' '}
        <code>error</code>.
      </P>

      <H3>Defining a custom agent</H3>
      <P>
        Drop a TOML file into the agents directory and Uniterm will pick it
        up:
      </P>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/agents/my-agent.toml"
        code={`id = "my-agent"
name = "My Agent"
command = "my-agent"
default_args = ["--interactive"]
settle_delay_ms = 200
marker_protocol = "osc777"`}
      />

      <Callout variant="tip" title="Pair agents up">
        For multi-agent workflows (e.g. one agent codes, another reviews), use
        a <Link
          to="/docs/templates"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >layout template</Link>{' '}— pre-built ones include{' '}
        <code>claude-opencode-pair</code>,{' '}
        <code>triad</code>, <code>ai-council</code>, and{' '}
        <code>red-blue-purple</code>.
      </Callout>
    </>
  );
}
