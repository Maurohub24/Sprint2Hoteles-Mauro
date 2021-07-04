import TarjetaHotel from "../Hoteles/TarjetaHotel/TarjetaHotel";
import "./Hoteles.styles.css";

function Hoteles(props) {
  return (
    <div className="hotelContainer">
      {props.dataList.length === 0 && <h2>No se encontraron Hoteles</h2>}
      {props.dataList.map((hotel) => {
        return (
          <TarjetaHotel
            key={hotel.slug}
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            rooms={hotel.rooms}
            city={hotel.city}
            country={hotel.country}
            price={hotel.price}
          />
        );
      })}
    </div>
  );
}

export default Hoteles;
