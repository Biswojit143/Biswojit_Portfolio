import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const techIcons = [
  { icon: <FaHtml5 size={50} />, color: "#E34F26" },
  { icon: <FaCss3 size={50} />, color: "#1572B6" },
  { icon: <FaJs size={50} />, color: "#F7DF1E" },
  { icon: <FaReact size={50} />, color: "#61DAFB" },
  { icon: <FaNodeJs size={50} />, color: "#3C873A" },
  { icon: <SiMongodb size={50} />, color: "#47A248" },
  { icon: <SiExpress size={50} />, color: "#FF4438" },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Experience"
      className="py-16 px-6 md:px-20 scroll-mt-24"
    >
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16"
        data-aos="fade-up"
      >
        <span className="text-purple-500">My</span> Experience
      </h1>

      <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10 lg:gap-16">
        {/* Tech Icons */}
        <div
          className="w-full lg:w-[45%] grid grid-cols-3 sm:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#1a1c2c] rounded-2xl shadow-xl border border-purple-700"
          data-aos="fade-right"
        >
          {techIcons.map((item, i) => (
            <div
              key={i}
              className="bg-[#11121b] p-4 rounded-2xl flex items-center justify-center transition-transform transform hover:-translate-y-2 hover:scale-105 shadow-md shadow-black hover:shadow-purple-600"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Experience Card */}
        <div
          className="w-full lg:w-[50%] bg-gradient-to-br from-[#1a1c2c] to-[#1f2233] p-6 sm:p-8 rounded-2xl border border-purple-700 shadow-xl"
          data-aos="fade-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="src/assets/Logo-Cpn1bFyJ.png"
                alt="Qlith Logo"
                className="h-16 md:h-20 object-contain animate-pulse"
              />
            </div>
            <div className="text-white text-center sm:text-left">
              <h2 className="text-xl md:text-2xl font-semibold mb-1">
                MERN Stack Intern –{" "}
                <span className="text-teal-400">Qlith Innovation</span>
              </h2>
              <p className="text-sm text-gray-400 mb-2">May 2025 - Present</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                <li>Working as a Full Stack Developer.</li>
                <li>Handling frontend with ReactJS and backend with Node.js.</li>
                <li>Database integration using MongoDB.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
