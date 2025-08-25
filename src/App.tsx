import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;