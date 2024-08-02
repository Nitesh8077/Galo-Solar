import React from "react";
import Header from "./Header";
import Form from "../Home/Form";
import Illuminate from "./Illuminate";
import Footer from "../Home/Footer";
import Install from "./Install";

const Homes = () => {
  return (
    <div>
      <Header />
      <Form />
      <Install />
      <Illuminate />
      <Footer />
    </div>
  );
};

export default Homes;
