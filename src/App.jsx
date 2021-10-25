import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer init={1} end={10}/>

        
    </div>
  );
}

export default App;
