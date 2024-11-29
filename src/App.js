import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={theme}>
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;