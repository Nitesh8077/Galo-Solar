import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import backgroundImg from "/images/CIRCUIT5.png";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-around items-center bg-yellow-500 p-10"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div data-aos="fade-up" className="text-center m-4 w-64">
        <img src="/images/reach.svg" alt="Reach Us" className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Reach Us</h2>
        <p>D-121, Okhla Phase 1, New Delhi – 110020, INDIA</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-center m-4 w-64"
      >
        <img src="/images/write.svg" alt="Write Us" className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Write Us</h2>
        <p>info@galo.co.in</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-center m-4 w-64"
      >
        <img src="/images/call.svg" alt="Call Us" className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Call Us</h2>
        <p>+91-93117 97244</p>
      </div>
    </div>
  );
};

export default ContactSection;
