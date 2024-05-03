import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whoami from './components/Whoami';
import Experiences from './components/Experience';
import Contact from './components/Contact';
import { colors } from './palette';
import FadeInText from './components/FadeInText';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.white }}>
      <Navbar />
      <FadeInText>
        <Whoami />
      </FadeInText>
      <SectionFirst></SectionFirst>
      {/* <FadeInText>
        <Aboutmy />
      </FadeInText> */}
      <Experiences />
      <SectionSecond></SectionSecond>
      <FadeInText>
        <Contact />
      </FadeInText>
      <Footer />
    </div>
  );
}

export default App;
