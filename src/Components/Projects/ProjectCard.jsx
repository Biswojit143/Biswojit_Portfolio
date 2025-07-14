import React from "react";

const ProjectCard = ({ title, main, image, link, aosType }) => {
  return (
    <div
      data-aos={aosType}
      className="group p-4 md:p-6 flex flex-col max-w-lg bg-[#0c0e19] shadow-lg shadow-slate-800 rounded-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-700/50"
    >
      <img
        className="rounded-xl object-cover h-48 w-full mb-4 transition duration-300 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <h3 className="px-2 text-xl md:text-2xl font-bold text-white">{title}</h3>
      <p className="px-2 text-sm md:text-md text-gray-300 py-2">{main}</p>
      <div className="mt-auto flex justify-end">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-md"
        >
          Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
