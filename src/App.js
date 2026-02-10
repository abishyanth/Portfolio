import React from 'react';
import './styles/GlobalStyles.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
