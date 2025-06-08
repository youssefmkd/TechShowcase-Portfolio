import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/ScrollUp/Scrollup';

const App = () => {
  return (
    <>
      <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      
    </main>
      <Footer />
      <Scrollup />

    </>
  );
}

export default App