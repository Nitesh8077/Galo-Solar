import React from "react";
import Banner from "./Banner";
import MainCarausel from "../customer/component/HomeCarausel/MainCarausel";
import Form from "./Form";
import TrustSection from "./TrustSection";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import SolarPromo from "./SolarPromo";
import Footer from "./Footer";
import SolarSolution from "./SolarSolution";
import Line from "./Line";
import HappyCustomersCarousel from "./HappyCustomersCarousel";
import SunrisesBanner from "./SunrisesBanner";

const Home = () => {
  return (
    <div>
      <SunrisesBanner />
      <Banner />
      <div id="form-section">
        <Form />
      </div>

      <TrustSection />
      <SolarSolution />
      <Line />
      <Projects />
      <HappyCustomersCarousel />
      <SolarPromo />
      <Footer />
    </div>
  );
};

export default Home;
