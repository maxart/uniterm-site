export interface DocsPage {
  slug: string;
  path: string;
  title: string;
  description: string;
}

export interface DocsSection {
  title: string;
  pages: DocsPage[];
}

export const DOCS_SECTIONS: DocsSection[] = [
  {
    title: 'Get Started',
    pages: [
      {
        slug: 'welcome',
        path: '/docs',
        title: 'Welcome',
        description: 'What Uniterm is and what to read first.',
      },
      {
        slug: 'installation',
        path: '/docs/installation',
        title: 'Installation',
        description: 'Install Uniterm on macOS, Windows, and Linux.',
      },
      {
        slug: 'quickstart',
        path: '/docs/quickstart',
        title: 'Quickstart',
        description: 'Open your first project, split a pane, run an agent.',
      },
    ],
  },
  {
    title: 'Core Concepts',
    pages: [
      {
        slug: 'workspaces',
        path: '/docs/workspaces',
        title: 'Workspaces',
        description:
          'The top-level container. Group projects, tabs, and shared memory.',
      },
      {
        slug: 'projects',
        path: '/docs/projects',
        title: 'Projects & Tabs',
        description: 'Organize work by project. Each tab keeps its own splits.',
      },
      {
        slug: 'panes',
        path: '/docs/panes',
        title: 'Panes & Splits',
        description: 'Split horizontally or vertically and navigate between panes.',
      },
      {
        slug: 'persistence',
        path: '/docs/persistence',
        title: 'Persistence',
        description: 'Your projects, tabs, and splits restore on next launch.',
      },
    ],
  },
  {
    title: 'AI Features',
    pages: [
      {
        slug: 'agents',
        path: '/docs/agents',
        title: 'AI Agents',
        description: 'Run Claude Code, Codex, Gemini, OpenCode, aider, and more.',
      },
      {
        slug: 'goals',
        path: '/docs/goals',
        title: 'Goals',
        description: 'Define an outcome, attach agents, track validation evidence.',
      },
      {
        slug: 'observatory',
        path: '/docs/observatory',
        title: 'Observatory',
        description:
          'Real-time control panel for every agent, goal, and workflow.',
      },
      {
        slug: 'templates',
        path: '/docs/templates',
        title: 'Layout Templates',
        description: 'Pre-built multi-agent workspaces, one click.',
      },
      {
        slug: 'workflows',
        path: '/docs/workflows',
        title: 'Workflows',
        description: 'Reusable parameterized commands, run from the palette.',
      },
    ],
  },
  {
    title: 'Customization',
    pages: [
      {
        slug: 'themes',
        path: '/docs/themes',
        title: 'Themes & Appearance',
        description: '21+ bundled themes, custom themes from disk.',
      },
      {
        slug: 'keyboard',
        path: '/docs/keyboard',
        title: 'Keyboard Shortcuts',
        description: 'Default bindings and how to rebind them.',
      },
      {
        slug: 'configuration',
        path: '/docs/configuration',
        title: 'Configuration',
        description: 'The uniterm.conf file and the Settings UI.',
      },
    ],
  },
];

export const DOCS_PAGES: DocsPage[] = DOCS_SECTIONS.flatMap((s) => s.pages);

export function findPage(path: string): DocsPage | undefined {
  return DOCS_PAGES.find((p) => p.path === path);
}

export function findAdjacent(path: string): { prev?: DocsPage; next?: DocsPage } {
  const i = DOCS_PAGES.findIndex((p) => p.path === path);
  if (i === -1) return {};
  return {
    prev: i > 0 ? DOCS_PAGES[i - 1] : undefined,
    next: i < DOCS_PAGES.length - 1 ? DOCS_PAGES[i + 1] : undefined,
  };
}
