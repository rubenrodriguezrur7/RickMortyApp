import { useState } from "react";
import "./SearchForm.css"

const SearchForm = ({ meEstoyEnviando }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [errorSearchLocation, setErrorSearchLocation] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue && isNaN(Number(newValue))) {
      setErrorSearchLocation("El id debe ser un numero");
    } else if (newValue && Number(newValue) < 1) {
      setErrorSearchLocation("El menor id existente es 1");
    } else if (newValue && Number(newValue) > 126) {
      setErrorSearchLocation("El máximo id existente es 126");
    } else {
      setErrorSearchLocation("");
    }
   
      setSearchLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(errorSearchLocation) return;

    meEstoyEnviando(searchLocation);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchLocation}
          onChange={handleChange}
          placeholder="Escribe el ID de una ubicación"/>
        <p style={{ color: "#5CAD4A" }} role="alert">
          {errorSearchLocation}
        </p>

        <button type="submit" style={{width: "80px"}}>Search</button>
      </form>
    </>
  );
}

 export default  SearchForm;