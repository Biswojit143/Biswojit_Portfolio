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
    <section
      id="Education"
      className="-mt-20 px-6 md:px-20 py-20 border-purple-700 text-white"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16">
        My <span className="text-purple-500">Education</span>
      </h2>

      <div className="relative">
        {/* Vertical center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-purple-700" />

        {/* Education cards with connectors */}
        <div className="md:grid md:grid-cols-2 md:gap-y-10">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            const aosType = isLeft ? "fade-right" : "fade-left";
            const cardPosition = isLeft ? "md:pr-12 md:items-end" : "md:pl-12 md:items-start";
            const connectorSide = isLeft ? "right-0" : "left-0";
            const connectorOffset = isLeft ? "md:-mr-[2px]" : "md:-ml-[2px]";

            return (
              <div
                key={index}
                className={`relative flex flex-col ${cardPosition}`}
                style={{ marginTop: `${index * 20}px` }} // reduced spacing
              >
                {/* Connector from card to center line */}
                <div
                  className={`hidden md:block absolute top-6 ${connectorSide} h-1 w-8 bg-purple-600 ${connectorOffset} z-0`}
                ></div>

                {/* Card */}
                <div
                  data-aos={aosType}
                  className="relative bg-[#1a1c2c] border border-purple-700 rounded-2xl shadow-lg hover:shadow-purple-500 transform hover:-translate-y-1 transition duration-300 px-6 py-6 md:w-full z-10"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold capitalize">{edu.degree}</h3>
                  </div>
                  <p className="text-gray-300 text-sm font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3 italic leading-relaxed">
                    {edu.about}
                  </p>
                  <div className="text-sm text-gray-400 font-mono">{edu.year}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
