import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 from-purple-500 bg-opacity-80 backdrop-blur-md text-white px-6 md:px-20 py-4 flex items-center justify-between">
      {/* Brand Name */}
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold">
        <li><a href="#About" className="hover:text-purple-500 transition">About</a></li>
        <li><a href="#Experience" className="hover:text-purple-500 transition">Experience</a></li>
        <li><a href="#Projects" className="hover:text-purple-500 transition">Projects</a></li>
        <li><a href="#Education" className="hover:text-purple-500 transition">Education</a></li>
        <li><a href="#Footer" className="hover:text-purple-500 transition">Contact</a></li>
      </ul>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 md:hidden font-semibold">
          <li><a href="#About" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">About</a></li>
          <li><a href="#Experience" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Experience</a></li>
          <li><a href="#Projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Projects</a></li>
          <li><a href="#Education" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Education</a></li>
          <li><a href="#Footer" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
