import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Layout.css';

function Layout() {
  const { colors, isDarkMode } = useTheme();

  return (
    <div 
      className="layout"
      style={{
        backgroundColor: colors.background,
        color: colors.text
      }}
    >
      <nav 
        className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        style={{
          borderBottom: `2px solid ${colors.primary}`
        }}
      >
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            💻 Dev Portfolio
          </Link>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2025 Divanshu Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;