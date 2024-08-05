import React from "react";
import "aos/dist/aos.css";
import backgroundImg from "/images/CIRCUIT5.png";

const projects = [
  { image: "/images/pro5.svg" },
  { image: "/images/pro4.svg" },
  { image: "/images/pro3.svg" },
  { image: "/images/pro1.svg" },
];

const Projects = () => {
  return (
    <div
      className="bg-yellow-400 p-8 md:p-12 lg:p-16"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8">
        Some of our Prestigious Projects
      </h1>
      <p className="text-lg md:text-xl text-center mb-6 md:mb-8">
        Explore the diverse range of solar energy solutions we have implemented
        for our clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-auto mb-4 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
