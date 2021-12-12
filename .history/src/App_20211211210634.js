import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello kanika, you are awesome
        </a>
        <BasicTabs/>
      </header>
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
