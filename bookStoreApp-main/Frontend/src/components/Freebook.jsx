// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";
import BookDetailModal from "./BookDetailModal"; // Import BookDetailModal

function Freebook() {
  const [book, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // State to manage the selected book

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/books");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 text-green-400">Free Offered Books</h1>
          <p className="text-xl">
            Discover Your Next Adventure at Literary Lane: Where Every Book is a Journey!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} onCardClick={handleCardClick} />
            ))}
          </Slider>
        </div>
      </div>
      {selectedBook && (
        <BookDetailModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Freebook;
