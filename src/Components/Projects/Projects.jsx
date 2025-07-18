import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";
import apploImg from "../../assets/Applo_Web_Clone.png";
import youtubeImg from "../../assets/Nexture.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Projects"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 border-purple-700 text-white min-h-screen"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Apple Website Clone */}
        <ProjectCard
          title="Apple Website Clone"
          main="I led a team to develop an Apple website clone using HTML, CSS, and JavaScript. This project aimed to replicate Apple’s clean, responsive, and interactive UI. I managed task distribution, maintained consistent design, and delivered a responsive layout across devices."
          image={apploImg}
          link="https://qlithbiswo.netlify.app/"
          github="https://github.com/Biswojit143/Qlith--Apple-Website-Clone"
          aosType="fade-up"
          aosDelay="0"
        />

        {/* Nexture UI Clone */}
        <ProjectCard
          title="Nexture UI Clone"
          main="Nexture UI is a clean and modern frontend project created with HTML and CSS. It focuses on responsive design, reusable UI components, and semantic code structure. The design includes mobile-friendly layouts, consistent spacing, and cross-browser compatibility."
          image={youtubeImg}
          link="https://nexcentqlithbbsr.netlify.app/"
          github="https://github.com/Biswojit143/MERN02M002/tree/main/June/week1/Assignment3"
          aosType="fade-up"
          aosDelay="200"
        />
      </div>
    </section>
  );
};

export default Projects;
