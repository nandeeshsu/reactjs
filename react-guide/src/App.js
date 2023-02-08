import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
import Food from './components/Food/Food';
import NewCompApp from './components/NewComp/NewCompApp';
import NewCompReduxApp from './components/NewCompRedux/NewCompReduxApp';
import NewCompReduxApp1 from './components/NewCompRedux1/NewCompReduxApp1';

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
          Learn React
        </a>
        <Hello name="Mita"/>
        <Hello />
        <Food />
        <NewCompApp />
        <NewCompReduxApp />
        <NewCompReduxApp1 />
      </header>
    </div>
  );
}

export default App;
