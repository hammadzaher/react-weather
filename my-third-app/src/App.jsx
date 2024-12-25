import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {

  const [city, setCity] = useState("");
  const [WeatherData, setWeatherData] = useState({});
  const [apiHit , setApiHit] = useState(false)

  const weatherCheak = (e) => {
    e.preventDefault();

    axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`)
      .then(function (response) {
        setWeatherData(response.data);
        setApiHit(true)
      })
      .catch(function (err) {
        console.log(err);
      })
  }



  return (
    <div className="parent">
      <form onSubmit={weatherCheak}>
        <label htmlFor="city">
          Enter City :
          <input type="text" placeholder='Enter your City' id='city' value={city} onChange={(e) => { setCity(e.target.value) }} />
        </label>
        <button>Click me!!</button>
      </form>
      {/* /////////////////////////////////////////////////////////////////////// */}
      {(apiHit)?
      <div className="result">
      <h1>{WeatherData?.location?.name} {WeatherData?.location?.region} {WeatherData?.location?.country}</h1>
      <h3>Temperature: {WeatherData?.current?.temp_c}°c</h3>
      <h3>FeelsLike: {WeatherData?.current?.feelslike_c}°c</h3>
      <h3>Temperature: {WeatherData?.current?.temp_f}°F</h3>
      <h3>FeelsLike: {WeatherData?.current?.feelslike_f}°F</h3>
      <h3>Humidity: {WeatherData?.current?.humidity}</h3>
    </div>
    :
    null
      }
      
    </div>
  );
}

export default App;
