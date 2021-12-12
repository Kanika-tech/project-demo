import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div className="App App-header">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         SYNOPTION
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello kanika, you are awesome
        </a>
      </header>
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
