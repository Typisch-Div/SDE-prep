import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThemeToggle from './components/ThemeToggle';
import ThemedCard from './components/ThemedCard';
import AppStateDemo from './components/AppStateDemo';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      
      {/* Theme Toggle Accessible Everywhere */}
      <ThemeToggle />
      
      {/* Demo Themed Components */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ThemedCard 
          title="Context API in Action" 
          description="This card's colors change when you toggle the theme! All components using the theme context update instantly without prop drilling."
        />
        <ThemedCard 
          title="Global State Management" 
          description="Instead of passing theme through every component, Context API provides it directly to any component that needs it."
        />
        <ThemedCard 
          title="Scalable Solution" 
          description="As your app grows with more components, Context API keeps your code clean and maintainable."
        />
      </div>
      <AppStateDemo />
    </ThemeProvider>
  );
}

export default App;