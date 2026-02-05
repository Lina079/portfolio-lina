import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import AboutSection from './components/AboutSection/AboutSection';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ProjectsGrid />
      <AboutSection />
      
      {/* Secciones siguientes se agregarán aquí */}
    </div>
  );
}

export default App;