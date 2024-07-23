import React from "react";
import MainCarausel from "../../component/HomeCarausel/MainCarausel";
import HomeSectionCarausel from "../../component/HomeSectionCarausel/HomeSectionCarausel";
import SolarCal from "./SolarCal";
import HomeSectionCarauselBifacial from "../../component/HomeSectionCarausel/HomeSectionCarauselBifacial";
import ReviewCardCarausel from "../../component/HomeSectionCarausel/ReviewCardCarausel";
import SolarCalculatorForm from "./SolarCalculatorForm";
import WRSolar from "../../../Home/WRSolar";

const HomePage = () => {
  return (
    <div>
      <MainCarausel />

      <SolarCal />
      <div>
        <WRSolar />
        <ReviewCardCarausel />
      </div>
    </div>
  );
};

export default HomePage;
