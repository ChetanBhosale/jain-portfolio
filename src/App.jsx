import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Description from './components/Description';
import Work from './components/Work';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Companies />
      <Description />
      <Work />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;