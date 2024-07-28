// eslint-disable-next-line no-unused-vars
import React from "react";
import teamImage from "../assets/team.jpg"; // Adjust the path to your image
import officeImage from "../assets/office.jpg"; // Adjust the path to your image
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 my-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
        <span className="text-pink-500"> About Us</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Welcome to Literary Lane! We are passionate about books and committed to providing you with the best selection of literary works.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
         
          <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
          <span className="text-pink-400"> Our Team</span>
          </h2>
          
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our <span className="text font-bold cursor-pointer"> team</span> is dedicated to curating a diverse and engaging collection of books. We believe in the power of reading to transform lives and inspire minds.
          </p>
          <a href="https://www.example.com/our-team" target="_blank" rel="noopener noreferrer">
            <img src={teamImage} alt="Our Team" className="w-full h-80 object-cover rounded-lg shadow-md my-10" />
          </a>
        
        </div>
    

        <div className="flex flex-col items-center">
         
          <h2 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
          <span className="text-pink-400"> Our Office</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our <span className="text font-bold cursor-pointer"> office</span> is where all the magic happens. It is  a place of creativity and passion, where we work tirelessly to bring you the best book recommendations and experiences.
          </p>
          <a href="https://www.example.com/our-office" target="_blank" rel="noopener noreferrer">
            <img src={officeImage} alt="Our Office" className="w-full h-80 object-cover rounded-lg shadow-md my-10" />
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300">
        <span className="text-pink-500 text-2xl"> Thank you</span>  for visiting Literary Lane. We are excited to be part of your reading journey and look forward to serving you with exceptional books and experiences.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
