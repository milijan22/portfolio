import { useState, useRef } from "react";

const API_KEY = "2af660c9fa5ac0cfc643e437253d1a92";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const inputRef = useRef("");

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=s`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
    console.log("Submited");
  };
  return (
    <div className="bg-cyan-900 border-b-gray-700 items-center p-6">
      <form onSubmit={handleSubmit}>
        <input
          className="p-1 px-6 border-gray-500 border-2 rounded-3xl focus:"
          type="text"
          value={city}
          ref={inputRef}
          placeholder="Enter city name..."
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </form>
      {loading && <p>loading...</p>}
      {error && <p>City not found</p>}

      {weather && (
        <div>
          <h3>
            {weather.name}, {weather.sys?.country}
          </h3>
          <p>
            <strong>{Math.round(weather.main.temp)}°C</strong> -{" "}
            {weather.weather[0].description}
          </p>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherApp;
