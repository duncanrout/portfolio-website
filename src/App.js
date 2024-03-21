import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whoami from './components/Whoami';
import Aboutmy from './components/Aboutmy';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Whoami />
      <Aboutmy />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
