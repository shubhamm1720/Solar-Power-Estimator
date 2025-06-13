import React from "react";

export default function WeatherSimulator({ weather, setWeather }) {
  return (
    <div className="weather-box">
      <label>Weather Condition:</label>
      <select value={weather} onChange={(e) => setWeather(e.target.value)}>
        <option value="sunny">Sunny</option>
        <option value="partly">Partly Cloudy</option>
        <option value="cloudy">Cloudy</option>
      </select>
    </div>
  );
}
