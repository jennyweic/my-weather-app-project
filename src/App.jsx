import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("");
  let [showText, setShowText] = useState(false);

  // Merge these together
  // let [temperature, setTemperature] = useState("null");
  // let [description, setDescription] = useState("null");
  // let [humidity, setHumidity] = useState("null");

  let [weatherData, setWeatherData] = useState({
    temperature: null,
    description: null,
    humidity: null,
  });

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    // console.log("hello " + city);

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    axios.get(url).then((data) => {
      // do something with the data
      // setTemperature(Math.round(data.data.temperature.current));
      // setDescription(data.data.condition.description);
      // setHumidity(data.data.temperature.humidity);

      const weatherData = {
        temperature: Math.round(data.data.temperature.current),
        description: data.data.condition.description,
        humidity: data.data.temperature.humidity,
      };

      setWeatherData(weatherData);

      setShowText(true);
    });
  }

  return (
    // <form>
    //   <h1> Weather Search Engine</h1>
    //   <input type="search" onChange={updateCity} />
    //   <input type="Submit" value="Search" onClick={getWeather} />

    <form onSubmit={getWeather}>
      <h1> Weather Search Engine</h1>
      <input type="search" onChange={updateCity} />
      <input type="Submit" value="Search" />

      {/* //display UX data here */}

      {showText && (
        <h1>
          {city} temperature is {weatherData.temperature}°C,{" "}
          {weatherData.description} and humidity of {weatherData.humidity}%;
        </h1>
      )}
    </form>
  );
}