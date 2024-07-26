import React from "react";
import Banner from "./Banner";
import MainCarausel from "../customer/component/HomeCarausel/MainCarausel";
import Form from "./Form";
import TrustSection from "./TrustSection";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import SolarPromo from "./SolarPromo";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <MainCarausel />
      <Banner />
      <Form />
      <TrustSection />
      <Projects />
      <SolarPromo />
      <Footer />
    </div>
  );
};

export default Home;
