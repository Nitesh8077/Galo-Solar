import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-black text-white p-10">
      <h2
        className="text-6xl font-bold text-yellow-400 mb-8"
        data-aos="fade-down"
      >
        Send us a message
      </h2>
      <form className="space-y-6" data-aos="fade-up">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-white text-black rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="City, State, Pincode"
            className="p-4 bg-white text-black rounded focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Phone"
            className="p-4 bg-white text-black rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 bg-white text-black rounded focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="p-4 bg-white text-black rounded w-full focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="p-4 bg-white text-black rounded w-full focus:outline-none h-32"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black p-4 rounded w-full font-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
