import './App.css';
import CallWithMe from './components/CallWithMe';
import IntroSection from './components/IntroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <main className="font-plusJakartaSans">
      <Navbar />
      <SkillsSection />
      <IntroSection />
      <CallWithMe />
      <div className="pt-6 pb-8 sm:pt-[22px] sm:pb-14 lg:pb-[64px]">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
