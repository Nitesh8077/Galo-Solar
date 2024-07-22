import React from "react";
import HeroSection from "./HeroSection";
import OnGridSolarSection from "./OnGridSolarSection";
import InfographicSection from "./InfographicSection";
import WhyGaloEnergy from "./WhyGaloEnergy";
import SolarSolutions from "./SolarSolutions";
import GetInTouch from "./GetInTouch";

const SolarPanel = () => {
  return (
    <div>
      <HeroSection />
      <OnGridSolarSection />
      <InfographicSection />
      <WhyGaloEnergy />
      <SolarSolutions />
      <GetInTouch />
    </div>
  );
};

export default SolarPanel;
