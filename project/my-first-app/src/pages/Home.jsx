import { Link } from 'react-router-dom';
import '../styles/Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <h1>Welcome to My App! </h1>
      <p>This is a multi-page React application using React Router.</p>
      
      <div className="cta-buttons">
        <Link to="/about" className="btn btn-primary">
          Learn About Me
        </Link>
        <Link to="/projects" className="btn btn-primary">
          View My Projects
        </Link>
        <Link to="/contact" className="btn btn-primary">
          Get In Touch
        </Link>
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li> React Components</li>
          <li> React Hooks (useState, useEffect)</li>
          <li> React Router Navigation</li>
          <li> Form Validation</li>
          <li> API Integration</li>
          <li> Responsive Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;