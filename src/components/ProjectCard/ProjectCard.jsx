import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiExpress,
} from 'react-icons/si';
import { TbChartBar } from 'react-icons/tb';

function ProjectCard({ project, isFeatured = false }) {
  // Map technology names to icons
  const techIcons = {
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'MongoDB': <SiMongodb />,
    'Express': <SiExpress />,
    'JavaScript': <SiJavascript />,
    'JWT': <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9em' }}>🔐 <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>JWT</span></span>,
    'Recharts': <TbChartBar />,
    'HTML5 Semantic': <SiHtml5 />,
    'CSS3': <SiCss3 />,
    'Git': <SiGit />
  };

  const handleClick = () => {
    if (project.demo && !project.demo.includes('construcción') && !project.demo.includes('under development')) {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    }
  };

  const isComingSoon = project.demo.includes('construcción') || project.demo.includes('under development');

  return (
    <motion.article 
      className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.name}
          className="project-card__image"
        />
      </div>

      {/* Project Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__description">{project.description}</p>

        {/* Tech Stack Icons */}
        <div className="project-card__tech">
          {project.tech.slice(0, 5).map((tech, index) => (
            <span 
              key={index} 
              className="project-card__tech-icon"
              title={tech}
            >
              {techIcons[tech] || tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          className={`project-card__cta ${isComingSoon ? 'project-card__cta--disabled' : ''}`}
          onClick={handleClick}
          disabled={isComingSoon}
        >
          {project.cta}
        </button>
      </div>
    </motion.article>
  );
}

export default ProjectCard;