import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import AboutSection from './components/AboutSection/AboutSection';
import Testimonials from './components/Testimonials/Testimonials';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ProjectsGrid />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

