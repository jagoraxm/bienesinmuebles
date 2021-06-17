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
      <h1>BIENES INMUEBLES METROPOLITANOS</h1>
    </div>
  );
}

export default App;
