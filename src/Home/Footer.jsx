import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-black text-yellow-500 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          className="flex flex-col items-center lg:items-start"
          data-aos="fade-up"
        >
          <img
            src="/images/galo.png"
            alt="Galo Solar Logo"
            className="h-24 mb-4"
          />
        </div>
        <div
          className="flex flex-col items-center lg:items-start"
          data-aos="fade-up"
        >
          <h3 className="font-bold mb-2">HELP AND SUPPORT</h3>
          <ul>
            <li className="mb-1">
              <a href="#">Request a site visit</a>
            </li>
            <li className="mb-1">
              <a href="#">About us</a>
            </li>
            <li className="mb-1">
              <a href="#">Support</a>
            </li>
            <li className="mb-1">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col items-center lg:items-start"
          data-aos="fade-up"
        >
          <h3 className="font-bold mb-2">CONNECT WITH US</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#">
              <img src="/images/fb.svg" alt="Facebook" className="h-8" />
            </a>
            <a href="#">
              <img
                src="/images/insta.svg"
                alt="Instagram"
                className="h-10 -mt-1"
              />
            </a>
            <a href="#">
              <img src="/images/yt.svg" alt="YouTube" className="h-10 -mt-1" />
            </a>
            <a href="#">
              <img src="/images/twitter.svg" alt="Website" className="h-8" />
            </a>
          </div>
          <div className="text-center lg:text-left">
            <p className="flex items-center justify-center lg:justify-start">
              <img src="/images/mail.svg" alt="Email" className="h-6 mr-2" />{" "}
              info@galo.co.in
            </p>
            <p className="flex items-center justify-center lg:justify-start mt-2">
              <img src="/images/phone.svg" alt="Phone" className="h-6 mr-2" />{" "}
              91 93117 97244
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center lg:items-start"
          data-aos="fade-up"
        >
          <h3 className="font-bold mb-2">CORP OFFICE</h3>
          <address className="not-italic text-center lg:text-left">
            D-120/121,
            <br />
            Okhla Phase 1,
            <br />
            New Delhi-110020
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
