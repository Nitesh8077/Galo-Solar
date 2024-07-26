import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: "1",
    name: "Sushila Devi, UP",
    image: "/images/cmr1.svg",
    feedback:
      "गेलो एनर्जी की सोलर सिस्टम से मेरे घर की बिजली का बिल बहुत कम हो गया है। सोलर पैनल्स बेहद ही बेहतरीन और टिकाऊ हैं। पिछले साल एक बहुत ही तेज तूफान आया था, लेकिन गेलो एनर्जी की सोलर पैनल ने इसे सहन कर लिया, और कोई भी नुकसान नहीं हुआ। अब बिजली कटौती की भी कोई चिंता नहीं रहती। गेलो एनर्जी की टीम ने पूरे प्रोजेक्ट को बड़ी समझदारी और तल्लीनता से पूरा किया। उनके द्वारा दी गई वारंटी और टेक्निकल सपोर्ट भी बहुत अच्छा है। अब मैं निश्चित होकर अपने पैसे और दोनो के लिए बिजली का उपयोग कर सकती हूं। गेलो एनर्जी की मदद से हमें सौर ऊर्जा का बहुत लाभ मिल रहा है।",
  },
  {
    id: "2",
    name: "Omkar Singh, Lucknow Cantt",
    image: "/images/cmr2.svg",
    feedback:
      "Our experience with Galo Energy has been outstanding. When I decided to install a solar system for our home, the Galo team supported us every step of the way. Not only is the quality of the system excellent, but the service is also remarkable. Our electricity bills have significantly reduced, and we feel good knowing we’re contributing to reducing pollution. Additionally, with Galo’s 5-year warranty and 25-year life support, we are confident that our investment is in safe hands. Thank you, Galo Energy!",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        What Our Customers Are Saying
      </h1>
      <p className="text-center text-2xl mb-4">
        Hear from Those Who Made the Switch to Solar
      </p>
      <p className="text-center mb-8 max-w-3xl mx-auto">
        Discover the experiences of our satisfied customers who have benefited
        from Galo Solar's reliable and efficient solar solutions. Their stories
        highlight the positive impact of our products and services on their
        energy needs and overall satisfaction.
      </p>

      <div className="flex flex-col gap-8">
        {testimonials.map((testimonial) => {
          const isEven = parseInt(testimonial.id, 10) % 2 === 0;
          return (
            <div
              key={testimonial.id}
              className={`p-6 rounded-3xl w-full md:w-3/4 shadow-lg flex flex-col md:flex-row ${
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
