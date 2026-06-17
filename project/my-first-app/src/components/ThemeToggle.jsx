import { useTheme } from '../hooks/useTheme';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme}
        className={`toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
      >
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;