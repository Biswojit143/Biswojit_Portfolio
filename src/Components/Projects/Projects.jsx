import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";
import apploImg from "../../assets/Applo_Web_Clone.png";
import youtubeImg from "../../assets/Nexture.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // run animation once on scroll
  }, []);

  return (
    <div id="Projects" className="p-10 md:p-24 text-white border-purple-700 min-h-screen">
      
      {/* Sticky title */}
      <h1
        className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-center sticky top-0 border-purple-700 z-10 py-4"
      >
        My Projects
      </h1>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-up">
          <ProjectCard
            title="Apple Website Clone"
            main="A modern blogging website built with Next.js, inspired by the Apple homepage. It features smooth transitions, clean layout, and responsive design using Tailwind CSS."
            image={apploImg}
            link="https://qlithbiswo.netlify.app/"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <ProjectCard
            title="Nexture UI Clone"
            main="A clean UI clone of YouTube built with React and Tailwind. Implements dark theme, responsive video grid, and interactive search bar to mimic YouTube's user experience."
            image={youtubeImg}
            link="https://nexcentqlithbbsr.netlify.app/" // Use a live link instead of file:///
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
