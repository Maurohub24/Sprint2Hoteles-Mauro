import React from "react";
import { paisesTodos, precios, tamanos } from "../../constantes";
import "./Header.styles.css";

function Header(props) {
  const stringToDate = date => new Date(`${date} 00:00:00`).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const mensajeDePais = (pais) => {
    return pais === "todosPaises" ? "Cualquier pais" : pais;
  };
  let mensajePais = mensajeDePais(props.paises);

  const mensajeDePrecio = (precio) => {
    if (precio === "cualquierPrecio") return "de cualquier precio";
    if (precio === "1") return "de precio muy económico";
    if (precio === "2") return "de precio económico";
    if (precio === "3") return "de precio costoso";
    if (precio === "4") return "de precio muy costoso";
  };
  let mensajePrecio = mensajeDePrecio(props.precio);

  const mensajeTamano = (tamano) => {
    return tamano === "cualquierTamano" ? "Cualquier Tamaño" : `Tamaño ${tamano}`
  }

  return (
    <div className="headerContainer">
      <div className="headerTitle">{props.titulo}</div>
      <p className="textHeader">
        {
          props.dateFrom !== '' &&
          <span>desde el {stringToDate(props.dateFrom)}</span>
        }
        {
          props.dateTo !== '' &&
          <span> hasta el {stringToDate(props.dateTo)}</span>
        }
        {props.paises !== "todosPaises" && ` en ${mensajePais}`}
        {` ${mensajePrecio}, ${mensajeTamano(props.tamano)}`}
      </p>
    </div>
  );
}

export default Header;
