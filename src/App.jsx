import { useState } from "react";
import "./app.css";
import Boton from "./Boton";
import Pantalla from "./Pantalla";
import BotonClear from "./BotonClear";

//import fcc from "./assets/react-logo.svg";

function App() {
  const [input, setInput] = useState(10);

  const handleClear = () => {
    setInput(0);
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="fila">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila">
          <BotonClear clear={handleClear}>C</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
