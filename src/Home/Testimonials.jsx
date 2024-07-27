import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: "1",
    name: "Shriram Kumar Mehta",
    image: "/images/csxnew.svg",
    feedback:
      "Galo Energy transformed their energy needs with a seamless solar installation process. They found the team to be professional and efficient, ensuring every detail was taken care of. The high-performance solar panels have significantly reduced their electricity costs, and they are delighted with the eco-friendly benefits. The 5-year warranty and 25-year support gave them peace of mind about their investment.",
  },
  {
    id: "2",
    name: "Dr. Omkar Singh",
    image: "/images/cmr2.svg",
    feedback:
      "Galo Energy transformed their energy needs with a seamless solar installation process. They found the team to be professional and efficient, ensuring every detail was taken care of. The high-performance solar panels have significantly reduced their electricity costs, and they are delighted with the eco-friendly benefits. The 5-year warranty and 25-year support gave them peace of mind about their investment.",
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
              <div className="w-full md:w-2/3 md:pl-4 pt-3">
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
