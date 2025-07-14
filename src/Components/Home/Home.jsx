import React from "react";
import avatarImg from "../../assets/My_New_photo.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20 gap-10 ">
      {/* Left Text Section */}
      <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-6 md:mt-10">
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
          className="inline-block mt-6 py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold transition-transform hover:scale-105 shadow-[0_0_10px_rgba(130,69,236,0.4)]"
        >
          DOWNLOAD CV
        </a>
      </div>
      {/* Right Image Section */}
      <div className="relative">
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1 shadow-xl transition-transform duration-300 hover:scale-105">
          <img
            src={avatarImg}
            alt="My_New_photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
