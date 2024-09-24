// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";

function Cards({ item, isWishlistView, onCardClick }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    addToCart(item);
    toast.success("Book is added to the cart!");
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
      toast("Removed from wishlist");
    } else {
      addToWishlist(item);
      toast.success("Added to wishlist");
    }
  };

  return (
    <div className="mt-4 my-3 p-3" onClick={() => onCardClick(item)}>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            <div className="flex items-center">
              <div
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                onClick={handleBuyNow}
              >
                Buy Now
              </div>
              <div
                className="ml-3 cursor-pointer text-xl"
                onClick={handleWishlistClick}
              >
                {isInWishlist(item.id) ? (
                  <AiFillHeart className="text-pink-500" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              {isWishlistView && (
                <div
                  className="ml-3 cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-red-500 hover:text-white duration-200"
                  onClick={handleWishlistClick}
                >
                  Remove
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isWishlistView: PropTypes.bool,
  onCardClick: PropTypes.func.isRequired,
};

export default Cards;
