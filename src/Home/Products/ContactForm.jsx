import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-yellow-400 p-6 md:p-10 flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          WE CONTACT YOU FASTER THAN YOU THINK!
        </h1>
        <p className="text-center mb-8 text-sm md:text-base">
          Fill up the information below and our Customer Executive will call you
          within 24 hours.
        </p>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="City, State, Pincode"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
              <option>Surface</option>
              <option>Roof</option>
              <option>Ground</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
              <option>Desired Solar System Capacity</option>
              <option>2 kW</option>
              <option>5 kW</option>
              <option>10 kW</option>
              <option>20 kW</option>
              <option>30 kW</option>
              <option>40 kW</option>
              <option>50 kW</option>
              <option>60 kW</option>
              <option>70 kW</option>
              <option>80 kW</option>
              <option>90 kW</option>
              <option>100 kW</option>
              <option>150 kW</option>
              <option> >150 kW</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Usage:</p>
          <div className="flex flex-wrap items-center">
            <div className="flex items-center mb-2">
              <input id="industrial" type="checkbox" className="mr-2" />
              <label htmlFor="industrial" className="mr-4">
                Industrial
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input id="residential" type="checkbox" className="mr-2" />
              <label htmlFor="residential" className="mr-4">
                Residential
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input id="small-home" type="checkbox" className="mr-2" />
              <label htmlFor="small-home" className="mr-4">
                Small Home
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input id="commercial" type="checkbox" className="mr-2" />
              <label htmlFor="commercial" className="mr-4">
                Commercial
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input id="others" type="checkbox" className="mr-2" />
              <label htmlFor="others">Others</label>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            placeholder="Additional Information (If any)"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
