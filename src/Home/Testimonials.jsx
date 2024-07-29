import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: "1",
    name: "Shriram Kumar Mehta",
    image: "/images/csxnew.svg",
    feedback:
      "Shriram Kumar Mehta expressed his satisfaction with the Galo Solar System, noting its superior efficiency and seamless integration into his existing setup. He commended the robust build quality and advanced technology of the solar panels, which have significantly enhanced his energy independence. Mehta highlighted the ease of installation and the ongoing support from Galo Energy’s team, describing their assistance as both professional and prompt. He also appreciated the substantial savings on his energy bills, attributing this to the system’s high performance.",
  },
  {
    id: "2",
    name: "Dr. Omkar Singh",
    image: "/images/cmr2.svg",
    feedback:
      "Dr. Omkar Singh shared his experience with the Galo Solar System, highlighting the exceptional performance and efficiency of the product. He praised the solar system system for its reliability and the significant reduction in his energy costs. According to Dr. Singh, the installation process was smooth, and the support team was professional and responsive. Dr. Singh appreciated the innovative technology and robust design of the solar panels, which he found to be highly durable and effective even in adverse weather conditions.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white p-8 max-w-screen-full mx-auto overflow-hidden">
      <h1 className="text-4xl text-yellow-400 font-bold text-center mb-4">
        Our Happy Customers
      </h1>
      <p className="text-center text-yellow-400 text-2xl mb-4">
        Here are our experiences with our happy customers who put faith on our
        products and are now saving 100% electricity through Galo Solar Systems.
      </p>

      <div className="flex flex-col mt-10 gap-8">
        {testimonials.map((testimonial) => {
          const isEven = parseInt(testimonial.id, 10) % 2 === 0;
          return (
            <div
              key={testimonial.id}
              className={`p-6 rounded-3xl w-full max-w-full md:w-3/4 shadow-lg flex flex-col md:flex-row ${
                isEven ? "md:ml-auto" : "md:mr-auto"
              } bg-yellow-500 text-black`}
              data-aos={isEven ? "fade-left" : "fade-right"}
            >
              <div className="w-full md:w-96 mb-4 md:mb-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-4 pt-0">
                <h2 className="text-xl font-bold mb-4">{testimonial.name}</h2>
                <p className="italic">{testimonial.feedback}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
