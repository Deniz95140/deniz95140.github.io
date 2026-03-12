import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const embeddedProjectIds = [12, 13, 14];
  const embeddedProjects = projects.filter((proj) => embeddedProjectIds.includes(proj.id));
  const developmentOrder = [7, 3, 1, 2, 4, 11];
  const developmentProjects = developmentOrder
    .map((id) => projects.find((proj) => proj.id === id))
    .filter(Boolean);

  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="portfolio__head">
          <h2>{'PROJETS R\u00C9ALIS\u00C9S'}</h2>
        </div>
        <h3 className="projects-subtitle">{'PROJETS SYST\u00C8MES EMBARQU\u00C9S'}</h3>
        <div className="portfolio__projects">
          {embeddedProjects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
        <h3 className="projects-subtitle projects-subtitle-development">{'PROJETS D\u00C9VELOPPEMENT'}</h3>
        <div className="portfolio__projects">
          {developmentProjects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
          <a
            href="https://github.com/deniz95140"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Voir plus de projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

