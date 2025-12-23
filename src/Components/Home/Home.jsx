import React from "react";
import avatarImg from "../../assets/My_New_photo.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <section
      id="Home"
      className="pt-16 text-white flex flex-col md:flex-row w-full justify-between items-center md:items-center px-4 sm:px-8 md:px-16 lg:px-20 py-10 gap-10 scroll-mt-24"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed tracking-tight">
          I'm a passionate MERN Stack Developer with a strong foundation in
          building full-stack web applications using MongoDB, Express.js,
          React.js, and Node.js. I specialize in creating fast, responsive, and
          scalable web solutions that solve real-world problems. Whether it's
          front-end design or back-end logic, I enjoy crafting clean code and
          seamless user experiences.
        </p>

        <a
          href="https://drive.google.com/file/d/14eUgDya9-kKutiD4rm4dAD3Ki_I4MzBg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm sm:text-base font-semibold transition-transform hover:scale-105 shadow-[0_0_10px_rgba(130,69,236,0.4)]"
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Right Image Section */}
      <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex-shrink-0 self-center">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1 shadow-xl transition-transform duration-300 hover:scale-105">
          <img
            src={avatarImg}
            alt="My_New_photo"
            className="w-full h-full object-cover rounded-full."
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
