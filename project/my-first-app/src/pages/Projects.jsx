import { Link } from 'react-router-dom';
import '../styles/Pages.css';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'Responsive portfolio with HTML, CSS, and JavaScript',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      name: 'To-Do List App',
      description: 'Interactive task management with localStorage',
      tech: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 3,
      name: 'Contact Form',
      description: 'Form with validation and error handling',
      tech: ['React', 'useState', 'CSS']
    },
    {
      id: 4,
      name: 'Data Fetcher',
      description: 'API integration with loading and error states',
      tech: ['React', 'useEffect', 'API']
    }
  ];

  return (
    <div className="page projects-page">
      <h1>My Projects </h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="btn btn-secondary">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Projects;
