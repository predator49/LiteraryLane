// src/components/Contact.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import contactImage from "../../public/ContactImage.png"; // Replace with your image

function Contact() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-20">
      <button
        onClick={handleBack}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mb-6 hover:bg-gray-400"
      >
        Back to Home
      </button>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <img src={contactImage} alt="Contact Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-green-500">Get in Touch</h1>
          <p className="text-lg mb-6">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <form className="space-y-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16m-8 6h8"></path>
                </svg>
                <span>Alambagh, Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16m-8 6h8"></path>
                </svg>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8v4h4m-4 4h4v-4m0-4v4h4V8h-4"></path>
                </svg>
                <span>contact@literarylane.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
