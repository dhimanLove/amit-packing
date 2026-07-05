import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Process } from './components/sections/Process';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="bg-[var(--color-vellum)]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
