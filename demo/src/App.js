import logo from './logo.svg';
import './App.css';

function App() {
  const simba = "https://i5.walmartimages.com/asr/735bc50c-9f07-4161-8d74-12130c2986d0_1.2fdb273851fa4a453c25169806bdffa9.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
  const george = "https://www.littlelakecounty.com/wp-content/uploads/2016/08/curious-george-balloons.png"
  return (
    <div className="App">
      <header className="App-header">
        <img src={george} className="" alt="logo" />
        <img src={simba} className="App-logo" alt="logo" />
        <p>
          This has been edited
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
