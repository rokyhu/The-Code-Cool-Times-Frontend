import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const city = 'Budapest';
  const currentWeatherURL = `http://localhost:8080/weather/v1/city=${city}`;

  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");
  const [weatherStatus, setWeatherStatus] = useState("");


  useEffect(() => {
    axios.get(currentWeatherURL).then((response) => {
      setTemperature(response.data.temperature);
      setIcon(response.data.icon);
      setWeatherStatus(response.data.description);
    });
  }, [currentWeatherURL]);

  return (
    <div id="weather-container">
      <img id="weather-left" src={icon} alt="weather-icon" />
      <div id="weather-right">
        <h5>Budapest</h5>
        <div>
          {weatherStatus}, {temperature} °C
        </div>
      </div>
    </div>
  );
}
