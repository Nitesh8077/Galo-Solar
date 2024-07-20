import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-yellow-400 text-black p-8 space-y-8 text-center"
    >
      <div
        className={`transform transition-transform duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img className="-mt-12" src="/images/verctor.svg" alt="Vector" />
        <h2 className="text-6xl font-bold">Send us a message</h2>
        <p className="mt-2 text-2xl">
          Write us now. Our team will be more than happy to assist you with all
          your questions and queries. Feel free to reach out.
        </p>
      </div>
      <form
        className={`mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <input
          type="text"
          placeholder="Name"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
        />
        <input
          type="text"
          placeholder="Company"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-2"
        />
        <textarea
          placeholder="Message"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-2"
          rows="5"
        ></textarea>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full p-4 bg-black text-yellow-400 font-bold rounded-md hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
