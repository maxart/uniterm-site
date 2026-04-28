import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock';
import { KeyChord } from '../components/Kbd';
import { H1, H2, Lede, LI, OL, P, Strong, UL } from '../components/Prose';

export function Workflows() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        AI Features
      </p>
      <H1>Workflows</H1>
      <Lede>
        Workflows are reusable parameterized commands you can run from the
        command palette. They're a step up from shell aliases — with prompts
        for parameters, descriptions, and discoverability.
      </Lede>

      <H2>Running a workflow</H2>
      <OL>
        <LI>
          Open the command palette with <KeyChord keys={['Mod', 'K']} />.
        </LI>
        <LI>
          Type <code>run workflow</code> and pick from the list.
        </LI>
        <LI>
          If the workflow has placeholders, Uniterm prompts you for each one.
        </LI>
        <LI>
          The composed command runs in the focused pane.
        </LI>
      </OL>

      <H2>Defining a workflow</H2>
      <P>
        Workflows are TOML files in the workflows directory:
      </P>
      <UL>
        <LI><Strong>macOS / Linux</Strong>: <code>~/.config/uniterm/workflows/</code></LI>
        <LI><Strong>Windows</Strong>: <code>%APPDATA%\uniterm\workflows\</code></LI>
      </UL>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/workflows/build-and-test.toml"
        code={`id = "build-and-test"
name = "Build and test a feature branch"
description = "Check out a branch, install deps, run the test suite"
tags = ["git", "test"]
shell = "bash"
command = """
git checkout {{branch:Feature branch name}} && \\
npm install && \\
npm test
"""`}
      />

      <H2>Placeholders</H2>
      <P>
        Use <code>{`{{name:Description shown in the prompt}}`}</code> for any
        parameter you want to fill in at run time. The description is shown
        as the input label. Placeholders without descriptions still work but
        show only the name.
      </P>
      <P>
        For a workflow that accepts a branch and a test pattern:
      </P>

      <CodeBlock
        language="toml"
        filename="~/.config/uniterm/workflows/test-one.toml"
        code={`id = "test-one"
name = "Run a single test on a branch"
command = """
git checkout {{branch:Feature branch}} && \\
npx vitest run -t '{{pattern:Test name pattern}}'
"""`}
      />

      <Callout variant="tip" title="Pair with goals">
        Set a project's default workflow on its goals — every new goal in the
        project starts with that workflow attached. Useful for repeatable
        flows like "make a feature branch, run agent, run tests, open PR."
      </Callout>

      <H2>Workflow fields</H2>
      <UL>
        <LI><code>id</code> — unique within the workflows directory</LI>
        <LI><code>name</code> — human-readable label shown in the palette</LI>
        <LI><code>description</code> — short blurb shown beneath the name</LI>
        <LI><code>tags</code> — optional array; used for grouping</LI>
        <LI><code>shell</code> — optional shell override (e.g. <code>bash</code>, <code>pwsh</code>, <code>fish</code>)</LI>
        <LI>
          <code>command</code> — the command template; supports{' '}
          <code>{`{{name:description}}`}</code> placeholders, and standard
          shell features (pipes, redirects, conditionals, multi-line)
        </LI>
      </UL>
    </>
  );
}
