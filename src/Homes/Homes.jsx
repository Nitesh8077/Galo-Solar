import React from "react";
import Header from "./Header";
import Form from "./Form";
import Illuminate from "./Illuminate";
import Footer from "../Home/Footer";
import SolarInfo from "./SolarInfo";

const Homes = () => {
  return (
    <div>
      <Header />
      <Form />
      <SolarInfo />
      <Illuminate />
      <Footer />
    </div>
  );
};

export default Homes;
