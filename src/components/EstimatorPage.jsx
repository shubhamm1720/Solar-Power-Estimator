import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import panelData from "../data/panelData";
import sunlightData from "../data/sunlightData";
import WeatherSimulator from "./WeatherSimulator";

export default function EstimatorPage() {
  const [location, setLocation] = useState("");
  const [powerKw, setPowerKw] = useState("");
  const [panelId, setPanelId] = useState("");
  const [weather, setWeather] = useState("sunny");
  const navigate = useNavigate();

  const handleEstimate = () => {
    const baseSunlight = sunlightData[location];
    const weatherMultiplier = { sunny: 1, partly: 0.8, cloudy: 0.6 };
    const adjustedSunlight = baseSunlight * weatherMultiplier[weather];

    const panel = panelData.find((p) => p.id === panelId);
    const powerWatt = parseFloat(powerKw) * 1000;
    const panelCount = Math.ceil(powerWatt / (panel.rating * adjustedSunlight));

    const result = {
      location,
      powerKw,
      sunlight: adjustedSunlight.toFixed(2),
      panelCount,
      panel,
    };

    localStorage.setItem("solarResult", JSON.stringify(result));
    navigate("/result");
  };

  return (
    <div className="estimator">
      <h2>ESTIMATOR</h2>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select Location</option>
        {Object.keys(sunlightData).map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <select value={panelId} onChange={(e) => setPanelId(e.target.value)}>
        <option value="">Select Panel Type</option>
        {panelData.map((panel) => (
          <option key={panel.id} value={panel.id}>
            {panel.name} ({panel.rating}W)
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Power required (kW)"
        value={powerKw}
        onChange={(e) => setPowerKw(e.target.value)}
      />

      <WeatherSimulator weather={weather} setWeather={setWeather} />
      <button onClick={handleEstimate}>Calculate</button>
    </div>
  );
}
