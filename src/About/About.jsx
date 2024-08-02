import React from "react";
import Header from "./Header";
import SolarEnergy from "./SolarEnergy";
import CompanyInfo from "./CompanyInfo";
import InstallationShowcase from "./InstallationShowcase";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";
import Footer from "../Home/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <SolarEnergy />
      <CompanyInfo />
      <InstallationShowcase />
      <ContactSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default About;
