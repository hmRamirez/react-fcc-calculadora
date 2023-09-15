import "./boton.css";

function Boton(props) {
  //
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trim()}
      onClick={() => props.display(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
