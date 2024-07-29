import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-yellow-500">
      <h2 className="text-4xl md:text:4xl font-bold m-6">
        Project Enquiry Form
      </h2>
      <p className=" m-5">
        Welcome to Galo Energy. We are the fastest growing manufacturer of AI
        Quality Solar PV modules and we also engaged in offering EPC services.
        Our aim towards customer delight drives us to offer outstanding post
        sales service. Let's join our hands and excel together in the most
        potential solar industry.
      </p>
      <div
        className="bg-white rounded-lg shadow-lg p-8  w-3/4"
        data-aos="fade-up"
      >
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="company"
              >
                Company's Name (if any)
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="company"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="contact"
              >
                Contact Number *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="contact"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Id *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="city">
                City *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="city"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="state">
                State *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="state"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="project-size"
              >
                Project Size in (KW) *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="project-size"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="installation-type"
              >
                Installation Type *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                id="installation-type"
                required
              />
            </div>
          </div>
          <button
            className="mt-6 bg-black text-white px-4 py-2  rounded-md"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
