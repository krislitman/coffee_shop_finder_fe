import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import Footer from './components/footer';

function createAlert() {
      alert('Great Job');
}

function App() {
  return (
    <div className="App">
      <Header info="Header Info"/>
      {/* <header className="App-header"> */}
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
        <Footer message="Made by Kris"
        alert={createAlert}/>
      {/* </header> */}
    </div>
  );
}

export default App;
