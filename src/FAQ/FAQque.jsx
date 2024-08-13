import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-black text-yellow-400 p-8">
      <h1 className="text-3xl font-bold mb-4">FAQs</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-black border border-yellow-400 rounded p-4"
            data-aos="fade-up"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-lg font-medium"
            >
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="sun" className="text-yellow-500">
                  ☀️
                </span>
                <span>{faq.question}</span>
              </div>
              <div>
                {openIndex === index ? (
                  <span className="text-yellow-400">&#9650;</span> // Up Arrow
                ) : (
                  <span className="text-yellow-400">&#9660;</span> // Down Arrow
                )}
              </div>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What products does Galo Solar offer?",
    answer:
      "Galo Solar offers a wide range of solar products including solar panels, inverters, batteries, and complete solar energy systems.",
  },
  {
    question: "How can I contact Galo Solar for inquiries?",
    answer:
      "You can contact Galo Solar through our website contact form, by email at contact@galosolar.com, or by calling our customer service line.",
  },
  {
    question: "How can I install a solar system for my home or business?",
    answer:
      "Galo Solar provides installation services for both residential and commercial properties. Contact us for a consultation.",
  },
  {
    question:
      "Does Galo Solar provide financing options for solar installations?",
    answer:
      "Yes, we offer various financing options to make solar energy affordable for everyone.",
  },
  {
    question: "How can I apply for the PM KUSUM Scheme through Galo Solar?",
    answer:
      "To apply for the PM KUSUM Scheme, you can visit our website or contact us directly for assistance.",
  },
  {
    question: "How can I become a Galo Solar dealer?",
    answer:
      "If you're interested in becoming a dealer, please fill out our dealer application form on the website.",
  },
  {
    question: "How do I maintain my solar system?",
    answer:
      "Regular maintenance is crucial for optimal performance. Galo Solar offers maintenance services, or you can follow our maintenance guide.",
  },
  {
    question: "What warranties do Galo Solar products come with?",
    answer:
      "Our products come with warranties that vary depending on the product. Please check the product details or contact us for more information.",
  },
];

export default FAQ;
