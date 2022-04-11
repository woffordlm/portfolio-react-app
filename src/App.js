import './App.css';
import About from './components/About/About';
import Footer from './components/footer';
import Nav from './components/header';
import Hero from './components/hero/hero';
import Work from './components/work/Work'
import Contact from './components/Contact/Contact';
import React, { useState } from 'react';

function App() {
  const [currentTab,  setCurrentTab] = useState("About")
  ;
  return (
    <div className="App">
      <Nav  
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        >
      </Nav>
      <Hero></Hero>

    {
      (currentTab == 'About') ? <About /> : null
    }
     {
      (currentTab == 'Portfolio') ? <Work /> : null
    }
    {
      (currentTab == 'Contact') ? <Contact/> : null
    }
      <Footer></Footer>
    </div>
  );
}

export default App;
