import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from '../ProjectCard/ProjectCard';
import keepclientImg from '../../assets/images/keepclient.png';
import quantyImg from '../../assets/images/quanty.png';
import postlandImg from '../../assets/images/postland.png';
import depatriaImg from '../../assets/images/depatria.png';

function ProjectsGrid() {
  const { t } = useLanguage();

  // Build project data objects
  const projects = [
    {
      ...t.projects.keepclient,
      image: keepclientImg,
      cta: t.projects.cta
    },
    {
      ...t.projects.quanty,
      image: quantyImg,
      cta: t.projects.cta
    },
    {
      ...t.projects.postland,
      image: postlandImg,
      cta: t.projects.cta
    },
    {
      ...t.projects.depatria,
      image: depatriaImg,
      cta: t.projects.cta
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects__header">
          <h2 className="projects__title">{t.projects.title}</h2>
          <p className="projects__subtitle">{t.projects.subtitle}</p>
        </div>

      {/* Projects Mosaic Grid */}
    <div className="projects__grid">
        {projects.map((project, index) => (
        <ProjectCard 
      key={index}
      project={project}
      isFeatured={index < 2}
        />
        ))}
    </div> 
      </div>
    </section>
  );
}

export default ProjectsGrid;