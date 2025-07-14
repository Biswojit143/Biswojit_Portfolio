import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Schooling",
    institution: "Rajendra Narayan High School",
    year: "2017-18",
    about:
      "I completed my foundational education here. It laid the groundwork for my academic discipline and shaped my early interests in science and technology.",
  },
  {
    degree: "Intermediate",
    institution: "Sailendra Narayan (Degree) College, Rajkanika",
    year: "2019-20",
    about:
      "During my intermediate years, I focused on Mathematics and Computer Science, and participated in science fairs and academic seminars.",
  },
  {
    degree: "Graduation",
    institution: "Sailendra Narayan (Degree) College, Rajkanika",
    year: "2020-23",
    about:
      "I pursued my bachelor's degree here where I explored core computer science subjects and laid the foundation for advanced studies.",
  },
  {
    degree: "Master's (MCA)",
    institution: "GIFT Autonomous, Bhubaneswar",
    year: "2024-26",
    about:
      "Currently pursuing MCA with a focus on full-stack development, data structures, and software engineering practices.",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Education" className="border-purple-700 py-20 px-6 md:px-24 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">My Education</h1>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-purple-700" />

        {/* Cards */}
        <div className="space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-24">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                data-aos={isLeft ? "fade-right" : "fade-left"}
                className={`relative md:max-w-md p-6 bg-[#1a1c2c] rounded-2xl shadow-lg border border-purple-700 hover:shadow-purple-500 transition transform hover:-translate-y-3 duration-300 ${
                  isLeft ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"
                }`}
              >
                {/* Icon bubble */}
                <div
                  className={`hidden md:flex absolute top-10 ${
                    isLeft ? "-right-6" : "-left-6"
                  } w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full items-center justify-center shadow-lg`}
                >
                  <FaGraduationCap className="text-white text-2xl" />
                </div>

                {/* Card Content */}
                <h2 className="text-2xl font-bold mb-2 capitalize">{edu.degree}</h2>
                <p className="text-gray-300 text-sm font-semibold mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-sm mb-4 italic">{edu.about}</p>
                <div className="text-sm text-gray-400 font-mono">{edu.year}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
