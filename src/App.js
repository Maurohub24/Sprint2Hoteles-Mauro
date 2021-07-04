import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SelectorAuto from "./components/Filtros/FiltroSelect";
import Hoteles from "./components/Hoteles/Hoteles";
import hotelsData from "./data";
import { paisesTodos, precios, tamanos } from "./constantes";

function App() {
  const [paises, setPaises] = useState(paisesTodos[0].value);
  const [precio, setPrecio] = useState(precios[0].value);
  const [tamano, setTamano] = useState(tamanos[0].value);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const manejadorDateFrom = (e) => {
    setDateFrom(e.target.value)
  };

  const manejadorDateTo = (e) => {
    setDateTo(e.target.value);
  };

  const manejadorOnchange = (e) => {
    setPaises(e.target.value);
  };

  const manejadorOnchangePrecio = (e) => {
    setPrecio(e.target.value);
  };

  const manejadorOnchangeTamano = (e) => {
    setTamano(e.target.value);
  };

  const manejadorLimpiar = () => {
    setDateFrom("");
    setDateTo("");
    setPaises(paisesTodos[0].value);
    setPrecio(precios[0].value);
    setTamano(tamanos[0].value);
  };

  function crearLista() {

    const dateFromUnix = new Date(dateFrom).getTime();
    const dateToUnix = new Date(dateTo).getTime();

    let nuevaLista = hotelsData.filter((hotel) => {
      if (dateFrom !== "" && dateTo !== "") {
        return hotel.availabilityFrom <= dateFromUnix
          && hotel.availabilityTo >= dateToUnix
      }
      return hotel;

    });

    nuevaLista = nuevaLista.filter((hotel) => {
      if (paises === "todosPaises") return true;
      if (hotel.country === paises) {
        return true;
      }
      return false;
    });

    nuevaLista = nuevaLista.filter((hotel) => {
      if (precio === "cualquierPrecio") return true;
      if (hotel.price.toString() === precio.toString()) {
        return true;
      }
      return false;
    });

    nuevaLista = nuevaLista.filter((hotel) => {
      if (tamano === "cualquierTamano") return "de cualquier tamano";
      if (tamano === "pequeno" && hotel.rooms <= 10) return "tamano pequeno";
      if (tamano === "mediano" && hotel.rooms >= 11 && hotel.rooms <= 20)
        return "tamano mediano";
      if (tamano === "grande" && hotel.rooms >= 21) return "tamano grande";
      if (hotel.rooms.toString() === tamano.toString()) {
        return true;
      }
      return false;
    });

    return nuevaLista;
  }

  let listaFiltrada = crearLista();

  return (
    <div className="App">
      <Header
        titulo="Hoteles"
        dateFrom={dateFrom}
        dateTo={dateTo}
        paises={paises}
        precio={precio}
        tamano={tamano}
      />
      <div className="filtrosContainer">
        <input
          onChange={manejadorDateFrom}
          className="date-from"
          type="date"
          value={dateFrom}
        />
        <input
          onChange={manejadorDateTo}
          className="date-to"
          type="date"
          value={dateTo}
        />
        <SelectorAuto
          state={paises}
          opciones={paisesTodos}
          manejador={manejadorOnchange}
        />
        <SelectorAuto
          state={precio}
          opciones={precios}
          manejador={manejadorOnchangePrecio}
        />
        <SelectorAuto
          state={tamano}
          opciones={tamanos}
          manejador={manejadorOnchangeTamano}
        />
        <button
          onClick={manejadorLimpiar}
          className="fas fa-trash boton-limpiar"
          type="button"
        >
          <span> </span>
          LIMPIAR
        </button>
      </div>
      <Hoteles dataList={listaFiltrada} />
    </div>
  );
}

export default App;
