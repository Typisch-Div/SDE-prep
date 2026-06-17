import { useTheme } from '../hooks/useTheme';
import './ThemedCard.css';

function ThemedCard({ title, description }) {
  const { colors, isDarkMode } = useTheme();

  return (
    <div 
      className="themed-card"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        borderColor: colors.primary
      }}
    >
      <h3 style={{ color: colors.primary }}>{title}</h3>
      <p>{description}</p>
      <div className="theme-indicator">
        Currently: <strong>{isDarkMode ? '🌙 Dark' : '☀️ Light'}</strong>
      </div>
    </div>
  );
}

export default ThemedCard;