import { useState } from "react";
import "./app.css";
import Boton from "./Boton";
import Pantalla from "./Pantalla";
import BotonClear from "./BotonClear";
import { evaluate } from "mathjs";

//import fcc from "./assets/react-logo.svg";

function App() {
  const [input, setInput] = useState("");

  // Resetea la calculadora
  const handleClear = () => {
    setInput("");
  };

  // Funcion que muestra lo clickeado en display
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton display={handleClick}>1</Boton>
          <Boton display={handleClick}>2</Boton>
          <Boton display={handleClick}>3</Boton>
          <Boton display={handleClick}>+</Boton>
        </div>
        <div className="fila">
          <Boton display={handleClick}>4</Boton>
          <Boton display={handleClick}>5</Boton>
          <Boton display={handleClick}>6</Boton>
          <Boton display={handleClick}>-</Boton>
        </div>
        <div className="fila">
          <Boton display={handleClick}>7</Boton>
          <Boton display={handleClick}>8</Boton>
          <Boton display={handleClick}>9</Boton>
          <Boton display={handleClick}>*</Boton>
        </div>
        <div className="fila">
          <Boton display={handleResult}>=</Boton>
          <Boton display={handleClick}>0</Boton>
          <Boton display={handleClick}>.</Boton>
          <Boton display={handleClick}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear clear={handleClear}>C</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
