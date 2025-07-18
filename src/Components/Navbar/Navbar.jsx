import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // No section active initially

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Experience", "Projects", "Education", "Footer"];
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          if (window.scrollY >= top) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Experience", label: "Experience" },
    { id: "Projects", label: "Projects" },
    { id: "Education", label: "Education" },
    { id: "Footer", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 from-purple-500 bg-opacity-80 backdrop-blur-md text-white px-6 md:px-20 py-4 flex items-center justify-between">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => handleMenuClick(item.id)}
              className={`transition ${
                activeSection === item.id
                  ? "text-purple-500"
                  : "hover:text-purple-500"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 md:hidden font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleMenuClick(item.id)}
                className={`transition ${
                  activeSection === item.id
                    ? "text-purple-500"
                    : "hover:text-purple-500"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
