import React from "react";
import MainCarausel from "../../component/HomeCarausel/MainCarausel";
import ReviewCardCarausel from "../../component/HomeSectionCarausel/ReviewCardCarausel";
import WRSolar from "../../../Home/WRSolar";

const HomePage = () => {
  return (
    <div>
      <MainCarausel />
      <div>
        <WRSolar />
        <ReviewCardCarausel />
      </div>
    </div>
  );
};

export default HomePage;
