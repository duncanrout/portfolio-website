import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whoami from './components/Whoami';
import Aboutmy from './components/Aboutmy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Whoami />
      <Aboutmy />
      <Footer />
    </div>
  );
}

export default App;
