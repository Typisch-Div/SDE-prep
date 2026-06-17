import { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  // Theme colors
  const themeColors = {
    light: {
      background: '#ffffff',
      text: '#000000',
      primary: '#667eea',
      secondary: '#764ba2'
    },
    dark: {
      background: '#1a1a1a',
      text: '#ffffff',
      primary: '#764ba2',
      secondary: '#667eea'
    }
  };

  const value = {
    isDarkMode,
    theme,
    toggleTheme,
    colors: themeColors[theme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}