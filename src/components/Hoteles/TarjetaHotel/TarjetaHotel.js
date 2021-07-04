import React from "react";
import { isPropertySignature } from "typescript";
import "./TarjetaHotel.styles.css";

function TarjetaHotel(props) {
  return (
    <div className="hotels-container">
      <img src={props.photo} alt="Hotel" />
      <div className="info">
        <h2 className="hotelName">{props.name}</h2>
        <p className="hotelDescription">{props.description}</p>
        <div>
          <div className="location">
            <div>
              <i className="icon fas fa-map-marker-alt"></i>
              <span className="ml-10">{props.city}, {props.country}</span>
            </div>
          </div>
          <div className="rooms">
            <i className="icon fas fa-bed"></i>
            <span className="ml-10">{props.rooms} Habitaciones</span>
          </div>
          <div>
            <Price total={props.price} />
          </div>
        </div>
        <button className="reservaButton" type="button">
          Reservar
        </button>
      </div>
    </div>
  );
}

function Price(props) {
  const dollars = [];
  for (let i = 1; i <= 4; i++) {
    if (i <= props.total) {
      //dollar lleno
      dollars.push(<i key={`price-${i}`} className="fas fa-dollar-sign"></i>)
    } else {
      //dollar vacio
      dollars.push(<i key={`price-${i}`} className="fas fa-dollar-sign opacity"></i>)
    }
  }
  return (
    <span className="price-container">
      {dollars}
    </span>
  )
}

export default TarjetaHotel;
