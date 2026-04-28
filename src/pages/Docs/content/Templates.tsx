import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, H3, Lede, LI, P, Strong, UL } from '../components/Prose';

export function Templates() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Layout Templates</H1>
      <Lede>
        Templates spawn pre-arranged multi-pane workspaces with agents pre-
        attached and starter prompts queued. They're the fastest way to set
        up a multi-agent flow without dragging panes around every time.
      </Lede>

      <H2>Using a template</H2>
      <P>
        Press <KeyChord keys={['Mod', 'K']} />, type{' '}
        <code>new tab from template</code>, and pick a template from the
        list. A new tab appears with the layout already built; agents spawn
        in their assigned panes.
      </P>
      <P>
        To set a default template for a project, right-click the project in
        the sidebar and choose <em>Set default template</em>. From then on,
        new tabs in that project use the template automatically. Hold{' '}
        <KeyChord keys={['Shift']} /> while pressing{' '}
        <KeyChord keys={['Mod', 'T']} /> to opt out for a single tab.
      </P>

      <H2>Built-in templates</H2>
      <UL>
        <LI>
          <code>claude-shell</code> — Claude Code on the left, a shell on the
          right. Good general-purpose layout.
        </LI>
        <LI>
          <code>opencode-shell</code> — Same as above with OpenCode.
        </LI>
        <LI>
          <code>claude-opencode-pair</code> — Claude on the left, OpenCode on
          the right. Useful for cross-checking.
        </LI>
        <LI>
          <code>triad</code> — Three panes: Claude, Codex, Gemini. For
          multi-vendor brainstorming.
        </LI>
        <LI>
          <code>ai-council</code> — Three roles: <em>Advocate</em>,{' '}
          <em>Skeptic</em>, <em>Synthesizer</em>. Good for design review.
        </LI>
        <LI>
          <code>red-blue-purple</code> — Red team / Blue team / Purple
          reconciler. Built for security work.
        </LI>
        <LI>
          <code>appsec-review</code> — A single security-focused agent with
          your codebase mounted.
        </LI>
      </UL>

      <H2>Custom templates</H2>
      <P>
        Templates are TOML files in the templates directory:
      </P>
      <UL>
        <LI><Strong>macOS</Strong>: <code>~/.config/uniterm/templates/</code></LI>
        <LI><Strong>Linux</Strong>: <code>~/.config/uniterm/templates/</code></LI>
        <LI><Strong>Windows</Strong>: <code>%APPDATA%\uniterm\templates\</code></LI>
      </UL>

      <H3>Example: a planner / implementer pair</H3>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/templates/plan-build.toml"
        code={`id = "plan-build"
name = "Plan + Build"
description = "Claude (planner) on the left, Codex (builder) on the right"

[[panes]]
id = "planner"
position = "left"
size = 0.5
agent = "claude"
initial_prompt = """
You are the planner. Read the repo, propose a step-by-step plan
for the user's task, then hand off to the builder.
"""

[[panes]]
id = "builder"
position = "right"
size = 0.5
agent = "codex"
initial_prompt = """
You are the builder. Wait for the planner's plan, then implement
it step by step. Run tests after each step.
"""`}
      />

      <H3>Example: agent + dev server + tests</H3>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/templates/full-loop.toml"
        code={`id = "full-loop"
name = "Agent + Dev + Tests"

[[panes]]
id = "agent"
position = "left"
size = 0.55
agent = "claude"

[[panes]]
id = "dev"
position = "top-right"
size = 0.5
shell = "default"
initial_command = "npm run dev"

[[panes]]
id = "tests"
position = "bottom-right"
size = 0.5
shell = "default"
initial_command = "npm test -- --watch"`}
      />

      <Callout variant="tip" title="Reload without restarting">
        After editing a template file, open <Strong>Settings → Config</Strong>{' '}
        and click <Strong>Reload</Strong>. New tabs will pick up the
        change without needing to restart Uniterm.
      </Callout>

      <H2>Template fields</H2>
      <UL>
        <LI><code>id</code> — unique identifier, used in the palette</LI>
        <LI><code>name</code> — human-readable label</LI>
        <LI><code>description</code> — short summary</LI>
        <LI><code>panes</code> — array of panes in order</LI>
        <LI><code>panes[].position</code> — <code>left</code>, <code>right</code>, <code>top</code>, <code>bottom</code>, <code>top-left</code>, etc.</LI>
        <LI><code>panes[].size</code> — fractional size (0.0 – 1.0)</LI>
        <LI><code>panes[].agent</code> — agent ID (optional)</LI>
        <LI><code>panes[].shell</code> — shell override (optional)</LI>
        <LI><code>panes[].initial_command</code> — command to run on spawn</LI>
        <LI><code>panes[].initial_prompt</code> — text sent to the agent on spawn</LI>
      </UL>
    </>
  );
}
