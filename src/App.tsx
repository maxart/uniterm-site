import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { StructuredData } from './components/StructuredData';
import { AgenticSection } from './components/sections/AgenticSection';
import { AgentsStrip } from './components/sections/AgentsStrip';
import { FaqSection } from './components/sections/FaqSection';
import { FeaturesGrid } from './components/sections/FeaturesGrid';
import { InstallSection } from './components/sections/InstallSection';
import { KeyboardSection } from './components/sections/KeyboardSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { StatsStrip } from './components/sections/StatsStrip';
import { ThemesSection } from './components/sections/ThemesSection';
import { WorkflowsSection } from './components/sections/WorkflowsSection';

export function App() {
  return (
    <>
      <StructuredData />
      <a href="#main" className="skip-link">Skip to main content</a>
      <NavBar />
      <Hero />
      <main id="main">
        <AgentsStrip />
        <ShowcaseSection />
        <StatsStrip />
        <FeaturesGrid />
        <AgenticSection />
        <ThemesSection />
        <KeyboardSection />
        <WorkflowsSection />
        <InstallSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
