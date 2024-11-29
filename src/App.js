// src/App.js
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      <button onClick={toggleTheme}>Toggle Light/Dark Mode</button>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;