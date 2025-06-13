import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultGraph from "./ResultGraph";
import gsap from "gsap";

export default function ResultPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("solarResult"));
    if (!result) return navigate("/estimate");
    setData(result);
    gsap.from(".result-container", { opacity: 0, y: 50, duration: 1 });
  }, [navigate]);

  if (!data) return null;

  const systemCost = data.panel.rating * data.panelCount * 40;
  const dailyOutput = (data.sunlight * data.panel.rating * data.panelCount) / 1000;
  const monthlySavings = dailyOutput * 30 * 7;
  const payback = Math.ceil(systemCost / monthlySavings);

  return (
    <div className="result-container">
      <h2>ESTIMATION RESULT</h2>
      <img src={data.panel.img} alt={data.panel.name} />
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Sunlight Hours:</strong> {data.sunlight} hrs/day</p>
      <p><strong>Power Required:</strong> {data.powerKw} kW</p>
      <p><strong>Panel Type:</strong> {data.panel.name} ({data.panel.rating}W)</p>
      <p><strong>Estimated Panels:</strong> {data.panelCount}</p>
      <h3>Financials</h3>
      <p><strong>System Cost:</strong> ₹{systemCost.toLocaleString()}</p>
      <p><strong>Monthly Savings:</strong> ₹{monthlySavings.toFixed(0)}</p>
      <p><strong>Payback Period:</strong> {payback} months</p>
      <ResultGraph dailyOutput={dailyOutput} />
    </div>
  );
}
