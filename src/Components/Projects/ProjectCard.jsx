import React from "react";

const ProjectCard = ({
  title,
  main,
  image,
  link,
  github,
  aosType = "fade-up",
  aosDelay = "0",
}) => {
  return (
    <div
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className="group p-4 md:p-6 flex flex-col h-full bg-[#1a1c2c] shadow-lg shadow-slate-800 rounded-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-700/50"
    >
      <img
        className="rounded-xl object-cover h-48 w-full mb-4 transition duration-300 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <h3 className="px-2 text-xl md:text-2xl font-bold text-white">{title}</h3>
      <p className="px-2 text-sm md:text-base text-gray-300 py-2 leading-relaxed">
        {main}
      </p>

      <div className="mt-auto flex justify-end gap-4 flex-wrap">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-md"
        >
          Preview
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 py-2 px-6 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-md"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
