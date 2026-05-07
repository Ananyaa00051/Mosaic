import { motion, useScroll } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Vision from './components/sections/Vision';
import AppExperience from './components/sections/AppExperience';
import InteractionSystem from './components/sections/InteractionSystem';
import Algorithm from './components/sections/Algorithm';
import Community from './components/sections/Community';
import Discovery from './components/sections/Discovery';
import AestheticSystem from './components/sections/AestheticSystem';
import Notifications from './components/sections/Notifications';
import BusinessModel from './components/sections/BusinessModel';
import Manifesto from './components/sections/Manifesto';
import Footer from './components/sections/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full">
      <CustomCursor />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-[var(--ember)] z-[100] transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main>
        <Hero />
        <Problem />
        <Vision />
        <AppExperience />
        <InteractionSystem />
        <Algorithm />
        <Community />
        <Discovery />
        <AestheticSystem />
        <Notifications />
        <BusinessModel />
        <Manifesto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
