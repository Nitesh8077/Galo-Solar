import React from "react";
import "aos/dist/aos.css";

const projects = [
  { title: "Har Ki Paudi, Haridwar", image: "/images/pro1.svg" },
  { title: "Chandi Mata Mandir, Haridwar", image: "/images/pro2.svg" },
  { title: "Medical College, Kanpur, UP", image: "/images/pro3.svg" },
  { title: "German Embassy, Delhi", image: "/images/pro4.svg" },
  { title: "Jantar Mantar, Delhi", image: "/images/pro5.svg" },
  { title: "GGIC, Banda, UP", image: "/images/pro6.svg" },
];

const Projects = () => {
  return (
    <div className="bg-yellow-500 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
      <p className="text-center text-2xl mb-8">
        Explore the diverse range of solar energy solutions we have implemented
        for our clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full mb-4 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
