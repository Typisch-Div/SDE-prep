import { Link } from 'react-router-dom';
import '../styles/Pages.css';

function About() {
  return (
    <div className="page about-page">
      <h1>About Me </h1>
      
      <div className="about-content">
        <h2>Divanshu Sharma</h2>
        <p>
          I'm a 3rd year Computer Science student 
          at NIT Bhopal on a 
          intensive journey to become a
          full-stack developer and land amazing 
          SDE roles at top tech companies.
        </p>

        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill">
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS, Tailwind</p>
          </div>
          <div className="skill">
            <h4>Backend</h4>
            <p>Node.js, Express, Python, Flask</p>
          </div>
          <div className="skill">
            <h4>Database</h4>
            <p>MongoDB, PostgreSQL, SQL</p>
          </div>
          <div className="skill">
            <h4>Tools</h4>
            <p>Git, GitHub, VS Code, Vite</p>
          </div>
        </div>
      </div>

      <Link to="/" className="btn btn-secondary">
        ← Back to Home
      </Link>
    </div>
  );
}

export default About;