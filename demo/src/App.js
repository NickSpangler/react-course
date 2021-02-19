import logo from './logo.svg';
import coolPic from './Screen Shot 2021-02-18 at 5.16.38 PM.png'
import Rando from './Rando'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rando />
        <img src={coolPic} />
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
