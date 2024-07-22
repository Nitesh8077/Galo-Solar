import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import "tailwindcss/tailwind.css";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    address: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yc9r8to", // Replace with your EmailJS service ID
        "template_sh6azhy", // Replace with your EmailJS template ID
        formData,
        "0nQcDotTo-9_-pFPG" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
        },
        (error) => {
          console.error(error.text);
          alert("There was an error submitting the form.");
        }
      );
  };

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
        onSubmit={handleSubmit}
        className={`mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-1"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-2"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-4 border border-gray-300 rounded-md w-full sm:col-span-2"
          rows="5"
          value={formData.message}
          onChange={handleChange}
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
