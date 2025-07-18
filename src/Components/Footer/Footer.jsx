import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gt1iags", // Your EmailJS service ID
        "template_uca0flk", // Your EmailJS template ID
        form.current,
        "0qAEmL_LvFvWdDV0S" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatusMessage(""), 4000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Failed to send. Please try again.");
          setTimeout(() => setStatusMessage(""), 4000);
        }
      );
  };

  return (
    <footer
      id="Footer"
      className="text-white py-16 px-6 md:px-20 w-full"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        <span className="text-purple-500">Contact</span> Me
      </h1>
      <p className="text-gray-400 text-center mb-12 text-sm md:text-base">
        Feel free to reach out by filling this form.
      </p>

      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-[#1a1c2c] p-8 rounded-3xl shadow-xl border border-purple-700"
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-purple-600 rounded-xl focus:outline-none text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-purple-600 rounded-xl focus:outline-none text-white"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-purple-600 rounded-xl focus:outline-none text-white"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 text-white font-semibold px-8 py-3 rounded-full text-sm sm:text-base transition-transform shadow-[0_0_10px_rgba(130,69,236,0.4)]"
          >
            <FaPaperPlane /> Send Message
          </button>

          {statusMessage && (
            <p
              className={`text-center text-sm mt-4 ${
                statusMessage.startsWith("✅")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>

        {/* Image + Contact Info Horizontally */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-gray-400 text-sm">
          <img
            src="https://www.hondaindiafoundation.org/Uploads/images/contact-us.png"
            alt="Contact Illustration"
            className="w-full max-w-md h-auto rounded-xl"
          />

          {/* Contact Info in Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-500" />
              <span>Bhubaneswar</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-purple-500" />
              <span>+91 8926378746</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-purple-500" />
              <span>biswojitsahoo42@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-5 text-2xl">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-purple-400 hover:text-purple-600" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-purple-400 hover:text-purple-600" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-purple-400 hover:text-purple-600" />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <p className="mt-8 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Biswojit Sahoo. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
