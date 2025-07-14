import React from "react";
import AboutImg from "../../assets/passport-photo.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-3xl p-6 md:p-16 gap-8 md:gap-20 overflow-hidden
      pt-[80px] -mt-[80px]"
    >
      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
        className="relative group w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 p-1 shadow-2xl"
      >
        <div className="absolute -inset-1 animate-pulse bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-50 transition" />
        <img
          src={AboutImg}
          alt="About"
          className="w-full h-full object-cover rounded-full z-10 relative transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
          About Me
        </h2>

        <div className="space-y-10 text-gray-300">
          <div>
            <h3 className="text-cyan-400 text-2xl font-semibold mb-2">
              Who I Am
            </h3>
            <p className="text-md md:text-lg leading-relaxed">
              I’m a passionate MERN Stack Developer (MongoDB, Express.js,
              React.js, Node.js) with a strong foundation in full-stack
              development. As a fresher, I bring eagerness to learn, hands-on
              experience from projects, and a love for solving real-world
              problems with beautiful, functional code.
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-semibold mb-2">
              Skills
            </h3>
            <p className="text-md md:text-lg leading-relaxed">
              MERN stack includes React.js, Node.js, Express.js, MongoDB, Git,
              GitHub, Tailwind CSS, and deployment platforms like Netlify &
              Vercel. I create responsive UI, scalable APIs, and maintain clean,
              well-documented code.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
