// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import banner from "../../public/Banner.png";

function Banner() {
  const [authUser] = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (authUser) {
      // If user is logged in, handle different action
      // For example, redirect to a different page or show more options
      navigate('/course'); // Adjust the path as needed
    } else {
      // If user is not logged in, redirect to signup page
      navigate('/signup');
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new every day!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Dive into our vast collection of books and discover new adventures. Enjoy exclusive offers, personalized recommendations, and more.
            </p>
            <button
              onClick={handleButtonClick}
              className={`btn mt-6 ${
                authUser ? "btn-primary" : "btn-secondary"
              }`}
            >
              {authUser ? "Explore More" : "Get Started"}
            </button>
            {!authUser && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Sign up to unlock personalized features and exclusive offers!
              </p>
            )}
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
