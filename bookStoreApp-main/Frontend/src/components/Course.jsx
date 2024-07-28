// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import BookDetailModal from "./BookDetailModal";
import Footer from "../components/Footer"; // Import Footer

function Course() {
  const [book, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // State to manage the selected book

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/books");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const handleCardClick = (item) => {
    setSelectedBook(item); // Set the selected book to show in the modal
  };

  const handleCloseModal = () => {
    setSelectedBook(null); // Clear the selected book to hide the modal
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-6">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 font-medium  text-lg ">
            Welcome to Literary Lane Bookstore! Explore a vast collection of
            books across all genres, from fiction and mystery to romance and
            self-help. Enjoy personalized recommendations, exclusive editions,
            secure payments, and fast delivery. Join our community of book
            lovers to share reviews and attend virtual events. Start your
            literary adventure with us today!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} onCardClick={handleCardClick} />
          ))}
        </div>
      </div>
      {selectedBook && (
        <BookDetailModal book={selectedBook} onClose={handleCloseModal} />
      )}
      <Footer />
    </>
  );
}

export default Course;
