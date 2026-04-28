import { RouterProvider } from './lib/router';
import { useRouter } from './lib/useRouter';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { TooltipProvider } from './components/ui/tooltip';
import { DocsApp } from './pages/Docs/DocsApp';

export function App() {
  return (
    <TooltipProvider delayDuration={120}>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </TooltipProvider>
  );
}

function Routes() {
  const { path } = useRouter();

  if (path === '/docs' || path.startsWith('/docs/')) {
    return <DocsApp />;
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <NavBar />
      <main id="main">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
