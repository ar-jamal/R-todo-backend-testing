import logo from './logo.svg';
import './App.css';
// const axios = require("axios")
import axios from "axios"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/fakeproduct")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

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
      </header>
    </div>
  );
}

export default App;
