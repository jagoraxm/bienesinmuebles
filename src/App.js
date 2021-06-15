import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  let variable = true;

  useEffect(() => {
    const ejecuta = () => {
      axios
        .post("https://bieneinmuebles.herokuapp.com/login", {
          usuario: "jago",
          pass: "dsd",
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log);

      variable = false;
    };

    if (variable) ejecuta();

    return () => {};
  }, []);

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
