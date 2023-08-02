import logo from './logo.svg';
import './App.css';

function App() {
  let name="To learn React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
        <a
          className="App-link"
          href="https://www.geeksforgeeks.org/reactjs-tutorials/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Geeks For Geeks
        </a>
      </header>
    </div>
  );
}

export default App;
