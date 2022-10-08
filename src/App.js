import './App.css';
import IntroSection from './components/IntroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <main className="font-plusJakartaSans">
      <Navbar />
      <SkillsSection />
      <IntroSection />
    </main>
  );
}

export default App;
