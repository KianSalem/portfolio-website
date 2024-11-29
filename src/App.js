// src/App.js
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import LandingPage from './components/LandingPage.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';

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
      </Routes>
    </div>
  );
}

export default App;