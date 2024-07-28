// src/components/BestSeller.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import BookDetailModal from './BookDetailModal'; 
import Footer from "../components/Footer"// Import the BookDetailModal component

function BestSeller() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // State for selected book
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:4002/books');
        const bestSellers = res.data.filter(book => book.price >= 10 && book.price <= 20);
        setBooks(bestSellers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-6">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Best Sellers at <span className="text-pink-500">Literary Lane</span>
        </h1>
        <p className="mt-12 font-medium text-2xl">
          <span className="text-green-400">Dive!</span> into our collection of best-sellers that have captivated readers and sparked imaginations.
        </p>
        <Link to="/" className="mt-6 inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Back
        </Link>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {books.map((item) => (
          <div key={item.id} onClick={() => handleCardClick(item)} className="cursor-pointer">
            <Cards item={item} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <BookDetailModal book={selectedBook} onClose={closeModal} />
      )}
       <Footer />
    </div>
  );
}

export default BestSeller;
