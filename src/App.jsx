import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [weatherResponse, setWeatherResponse] = useState();
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(false)
    async function getWeather(city) {
      try {
        setLoading(true)
        let response = await fetch(
          `https://api.weatherapi.com/v1/current.json?` +
          new URLSearchParams({
            key: "55656032dd6f48efbd7195720232509",
            q: city,
          })
          );
          
          let responseJSON = await response.json();
          setLoading(false)
          setWeatherResponse(responseJSON)
          console.log(responseJSON, "responseJSON")
        } catch(error) {
          setLoading(false)
          alert("Failed to fetch weather data")
          console.log(error, "weather api error")
        }
    }

  return <>
    <input type="text" placeholder="Enter city name" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
    <button onClick={() => getWeather(searchText)}>Search</button>
    {loading ? <p>Loading data...</p> : weatherResponse === undefined ? null : (
      <>
      <Card title="Temperature" value={weatherResponse.current.temp_c + "C"}/>
      <Card title="Humidity" value={weatherResponse.current.humidity + "%"}/>
      <Card title="Condition" value={weatherResponse.current.condition.text}/>
      <Card title="Wind Speed" value={weatherResponse.current.wind_kph + " kph"}/>
       
   </>
    )}
  </>;
}

export default App;
