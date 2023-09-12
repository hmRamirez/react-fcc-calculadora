import React from "react";
import "./botonClear.css";

const BotonClear = ({ clear }) => {
  return (
    <div className="boton-clear" onClick={clear}>
      Clear
    </div>
  );
};

export default BotonClear;
