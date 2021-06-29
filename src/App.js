import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import SearchCity from "./SearchCity";
import SearchWeather from "./SearchWeather";

const API_KEY = "04794127ed8dd51b3f4b806399afef77";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response);
    setWeather(response.data);
  };

  return (
    <div className="App">
      {weather ? (
        <SearchWeather weather={weather} />
      ) : (
        <SearchCity setCity={setCity} fetchWeather={fetchWeather} />
      )}
      {/* <SearchWeather /> */}
    </div>
  );
}

export default App;
