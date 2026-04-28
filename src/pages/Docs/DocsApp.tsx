import { useRouter } from '@/lib/useRouter';

import { DocsLayout } from './DocsLayout';
import { Agents } from './content/Agents';
import { Configuration } from './content/Configuration';
import { Goals } from './content/Goals';
import { Installation } from './content/Installation';
import { Keyboard } from './content/Keyboard';
import { NotFound } from './content/NotFound';
import { Observatory } from './content/Observatory';
import { Panes } from './content/Panes';
import { Persistence } from './content/Persistence';
import { Projects } from './content/Projects';
import { Quickstart } from './content/Quickstart';
import { Templates } from './content/Templates';
import { Themes } from './content/Themes';
import { Welcome } from './content/Welcome';
import { Workflows } from './content/Workflows';
import { Workspaces } from './content/Workspaces';

export function DocsApp() {
  const { path } = useRouter();
  return <DocsLayout>{renderPage(path)}</DocsLayout>;
}

function renderPage(path: string) {
  switch (path) {
    case '/docs':
    case '/docs/':
      return <Welcome />;
    case '/docs/installation':
      return <Installation />;
    case '/docs/quickstart':
      return <Quickstart />;
    case '/docs/workspaces':
      return <Workspaces />;
    case '/docs/projects':
      return <Projects />;
    case '/docs/panes':
      return <Panes />;
    case '/docs/persistence':
      return <Persistence />;
    case '/docs/agents':
      return <Agents />;
    case '/docs/goals':
      return <Goals />;
    case '/docs/observatory':
      return <Observatory />;
    case '/docs/templates':
      return <Templates />;
    case '/docs/workflows':
      return <Workflows />;
    case '/docs/themes':
      return <Themes />;
    case '/docs/keyboard':
      return <Keyboard />;
    case '/docs/configuration':
      return <Configuration />;
    default:
      return <NotFound />;
  }
}
