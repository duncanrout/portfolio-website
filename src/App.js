import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whoami from './components/Whoami';
import Aboutmy from './components/Aboutmy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { colors } from './palette';

function App() {
  return (
    // temp fix for white line ate bottom
    <div className="App" style={{ backgroundColor: colors.forthText }}>
      <Navbar />
      <Whoami />
      <Aboutmy />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
