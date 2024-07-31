import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-black text-yellow-500 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div data-aos="fade-up">
          <img
            src="/images/galo.png"
            alt="Galo Solar Logo"
            className="w-40 mb-4"
          />
        </div>
        <div data-aos="fade-up">
          <p className="font-bold">HELP AND SUPPORT</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Request a site visit
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up">
          <p className="font-bold">CONNECT WITH US</p>
          <div className="flex space-x-4">
            <a href="#">
              <img src="/images/fb.svg" alt="Facebook" className="w-8 m-1" />
            </a>
            <a href="#">
              <img src="/images/insta.svg" alt="Instagram" className="w-10" />
            </a>
            <a href="#">
              <img src="/images/yt.svg" alt="YouTube" className="w-10" />
            </a>
            <a href="#">
              <img src="/images/twitter.svg" alt="Icon" className="w-8 m-1" />
            </a>
          </div>
          <p className="mt-4">info@galo.co.in</p>
          <p>91 93117 97244</p>
        </div>
        <div data-aos="fade-up">
          <p className="font-bold">CORP OFFICE</p>
          <p>D-120/121, Okhla Phase 1, New Delhi-110020</p>
        </div>
        <div data-aos="fade-up">
          <p className="font-bold">Facility 1:</p>
          <p>
            Galo Energy Private Limited, 7KM Milestone, Tosham Road, Dist.
            Bhiwani, Bawani Khera, Bhiwani, Haryana, 127032
          </p>
          <p>GSTIN: 06AAHCG2480N1ZA</p>
        </div>
        <div data-aos="fade-up">
          <p className="font-bold">Facility 2:</p>
          <p>
            Plot No 16H, KN 1550, Industrial Park-II, Salempur Mahdoood,
            Haridwar, Uttarakhand, 249402
          </p>
        </div>
        <div data-aos="fade-up">
          <p className="font-bold">Facility 3:</p>
          <p>
            Plot No. 17, Ecotech - XII, Greater Noida, Dist. Gautam Budh Nagar,
            (UP), Pin Code - 201306
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
