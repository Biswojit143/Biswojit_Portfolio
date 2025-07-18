import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="w-full px-6 md:px-20 py-16 scroll-mt-24"
    >
      <div className="w-full bg-[#1a1c2c] backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 space-y-16">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-white"
        >
          <span className="text-purple-500">About</span> Me
        </motion.h2>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        >
          {/* Who I Am */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-400">Who I Am</h3>
            <p className="text-gray-200 text-base leading-relaxed">
              I'm a passionate <span className="text-white font-medium">MERN Stack Developer</span> with a love for crafting interactive web applications. I enjoy turning complex problems into clean and user-friendly designs.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-400">Skills</h3>
            <p className="text-gray-200 text-base leading-relaxed">
              Proficient in <span className="text-white">React, Node.js, Express, MongoDB</span>, and familiar with tools like <span className="text-white">Git, Tailwind CSS, and Vercel</span>. I write code that’s clean, scalable, and performance-optimized.
            </p>
          </div>

          {/* Passion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-400">My Passion</h3>
            <p className="text-gray-200 text-base leading-relaxed">
              I thrive on building elegant UIs, pushing performance boundaries, and collaborating with creative minds. I'm a lifelong learner and love exploring new technologies every day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
