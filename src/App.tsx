import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeAnimation from './components/WelcomeAnimation';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import FloatingEmojis from './components/FloatingEmojis';
import FloatingLogos from './components/FloatingLogos';
import PartyPopper from './components/PartyPopper';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import SkillsProjectsPage from './pages/SkillsProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <WelcomeAnimation />
      <PartyPopper />
      <ScrollProgress />
      <Header />
      <div className="min-h-screen text-gray-900 relative overflow-x-hidden animate-fade-in" style={{ animationDelay: '2.5s' }}>
        <ParticleBackground />
        <FloatingEmojis />
        <FloatingLogos />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills-projects" element={<SkillsProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>

        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
