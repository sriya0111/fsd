import logo from './img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h5>Name &nbsp;: K.Sriya</h5>
      <h5>Roll no: 23255A0501</h5>
      <header className="App-header">
        <h1>Welcome to React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is an open-source js library maintained by facebook that can be used for creating views rendered in html.
          Can be executed with nodejs npm and also without. React views are declarative.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
