import React from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function LandingPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.from(".landing", { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <div className="landing">
      <h1>WELCOME TO SOLAR POWER ESTIMATOR</h1>
      <p>Calculate your solar panel requirements, savings, and payback.</p>
      <button onClick={() => navigate("/estimate")}>Get Started</button>
    </div>
  );
}
