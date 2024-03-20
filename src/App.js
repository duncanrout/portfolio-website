import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whoami from './components/Whoami';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Whoami />
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload test.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      <Footer />
    </div>
  );
}

export default App;
