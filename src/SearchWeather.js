import React from "react";
import "./SearchWeather.css";
import rain from "./icons/perfect-day.svg";
import sun from "./icons/temp.svg";
import humidity from "./icons/humidity.svg";
import wind from "./icons/wind.svg";
import pressure from "./icons/pressure.svg";

const WeatherInfoComonent = (props) => {
  return (
    <div className="Sunset_main">
      <div className="Sunset">
        <img src={props.icon} alt="" />
        <h6>{props.value}</h6>
        <h6>{props.name}</h6>
      </div>
    </div>
  );
};

function SearchWeather(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <div>
      <div className="main_weatherDiv">
        <div className="main_weather">
          <h4>React Weather App</h4>
          <br />
          <div className="main_img">
            <span>
              <h4>{`${Math.floor(weather?.main?.temp - 273)}°C`}</h4>{" "}
              <h6>{`| ${weather?.weather[0].description}`}</h6>
            </span>
            <span>
              <img src={rain} alt="" />
            </span>
          </div>
          <div>
            <h2>{`${weather?.name}, ${weather?.sys?.country}`}</h2>
            <h5>Weather Info</h5>
            {/* <div className="Sunset_main">
              <div className="Sunset">
                <img src={sun} alt="" />
                <h6>1:15</h6>
                <h6>Sunset</h6>
              </div>
              <div className="Sunset">
                <img src={humidity} alt="" />
                <h6>1:15</h6>
                <h6>Sunset</h6>
              </div>
            </div> */}
            <div className="main_Weather">
              <div>
                <WeatherInfoComonent
                  icon={sun}
                  name={isDay ? "sunset" : "sunrise"}
                  value={`${getTime(
                    weather?.sys[isDay ? "sunset" : "sunrise"]
                  )}`}
                />
                <WeatherInfoComonent
                  icon={wind}
                  name={"Wind"}
                  value={weather?.wind?.speed}
                />
              </div>
              <div>
                <WeatherInfoComonent
                  icon={humidity}
                  name={"Humidity"}
                  value={weather?.main?.humidity}
                />
                <WeatherInfoComonent
                  icon={pressure}
                  name={"Pressure"}
                  value={weather?.main?.pressure}
                />
              </div>
            </div>

            {/* <div className="Sunset_main">
              <div className="Sunset">
                <img src={wind} alt="" />
                <h6>1:15</h6>
                <h6>Sunset</h6>
              </div>
              <div className="Sunset">
                <img src={pressure} alt="" />
                <h6>1:15</h6>
                <h6>Sunset</h6>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWeather;
