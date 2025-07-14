import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
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
        "service_gt1iags",   // Replace this
        "template_uca0flk",  // Replace this
        form.current,
        "0qAEmL_LvFvWdDV0S"    // Replace this
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setStatusMessage("");
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Failed to send. Please try again.");

          setTimeout(() => {
            setStatusMessage("");
          }, 4000);
        }
      );
  };

  return (
    <footer
      id="Footer"
      className="border-purple-700 text-white py-16 px-6 md:px-24 flex flex-col items-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Contact Me
      </h1>
      <p className="text-gray-400 text-center mb-10 text-sm md:text-base">
        Feel free to reach out by filling this form.
      </p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#1a1c2c] p-6 md:p-10 rounded-2xl shadow-lg border border-purple-700"
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
          className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          <FaPaperPlane /> Send Message
        </button>

        {statusMessage && (
          <p
            className={`text-center text-sm mt-4 ${
              statusMessage.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>

      <div className="flex gap-6 mt-10">
        <a
          href="https://github.com/biswojit143"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGithub size={30} className="text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/biswojit-sahoo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <FaLinkedin size={30} className="text-white" />
        </a>
      </div>

      <p className="mt-6 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Biswojit Sahoo. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
