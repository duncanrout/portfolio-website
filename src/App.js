import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whoami from './components/Whoami';
import Aboutmy from './components/Aboutmy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { colors } from './palette';
import FadeInText from './components/FadeInText'; // Import the FadeInText component

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.forthText }}>
      <Navbar />
      {/* Use FadeInText component for elements you want to fade in */}
      <FadeInText>
        <Whoami />
      </FadeInText>
      <FadeInText>
        <Aboutmy />
      </FadeInText>
      <FadeInText>
        <Projects />
      </FadeInText>
      <FadeInText>
        <Contact />
      </FadeInText>
      <Footer />
    </div>
  );
}

export default App;
