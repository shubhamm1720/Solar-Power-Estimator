import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import LandingPage from "./components/LandingPage";
import EstimatorPage from "./components/EstimatorPage";
import ResultPage from "./components/ResultPage";

export default function AnimatedRoutes() {
  const location = useLocation();
  const containerRef = useRef();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fadeIn") {
      gsap.to(containerRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });
    } else if (transitionStage === "fadeOut") {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setDisplayLocation(location);
          setTransitionStage("fadeIn");
        },
      });
    }
  }, [transitionStage, location]);

  return (
    <div ref={containerRef} style={{ opacity: 1 }}>
      <Routes location={displayLocation}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/estimate" element={<EstimatorPage/>} />
        <Route path="/result" element={<ResultPage/>} />
      </Routes>
    </div>
  );
}
