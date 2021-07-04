import React from "react";
import "./Filtros.styles.css";

function Filtros(props) {
  return (
    <div className="filtros">
      <select
        onChange={props.manejador}
        value={props.state}
        className="category"
        name="todosPaises"
      >
        {props.opciones.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.inner}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filtros;
