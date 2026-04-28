import { useEffect, useState, type ReactNode } from 'react';

import { useRouter } from '@/lib/useRouter';

import { DocsPrevNext } from './DocsPrevNext';
import { DocsSidebar } from './DocsSidebar';
import { DocsTopBar } from './DocsTopBar';
import { findPage } from './nav';
import { Prose } from './components/Prose';

interface DocsLayoutProps {
  children: ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const { path } = useRouter();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const isMenuOpen = menuPath === path;
  const page = findPage(path);

  useEffect(() => {
    if (!page) {
      document.title = 'Docs · Uniterm';
      return;
    }
    document.title = `${page.title} · Uniterm Docs`;
  }, [page]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <DocsTopBar
        onMenuToggle={() => setMenuPath(isMenuOpen ? null : path)}
        isMenuOpen={isMenuOpen}
      />

      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[18rem_minmax(0,1fr)] xl:gap-14">
          <aside
            className="sticky top-14 hidden self-start overflow-y-auto py-8 lg:block lg:max-h-[calc(100vh-3.5rem)]"
            aria-label="Documentation navigation"
          >
            <DocsSidebar />
          </aside>

          <main className="min-w-0 py-10 lg:py-14">
            <article className="mx-auto w-full max-w-3xl">
              <Prose>{children}</Prose>
              <DocsPrevNext path={path} />
            </article>
          </main>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Documentation menu"
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuPath(null)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-6 shadow-2xl">
            <DocsSidebar onNavigate={() => setMenuPath(null)} />
          </div>
        </div>
      )}
    </div>
  );
}
