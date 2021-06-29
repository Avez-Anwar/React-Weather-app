import React from "react";
import "./SearchCity.css";
import daySvg from "./icons/perfect-day.svg";

function SearchCity(props) {
  const { setCity, fetchWeather } = props;

  return (
    <div className="main_weatherDiv">
      <div className="main_div">
        <h4>React Weather App</h4>
        <img src={daySvg} alt="" />
        <br /> <h4>Find Weather of the City</h4>
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <button type={"submit"}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchCity;
