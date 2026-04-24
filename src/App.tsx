import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';

export function App() {
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
