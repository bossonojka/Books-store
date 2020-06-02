import React from 'react';
import share from '../../assets/share.svg';
import { Star, Pay } from '../_shared/Icons/';
import PropTypes from 'prop-types';

import './BookControllers.scss';

export const BookControllers = ({ itemId, isCart, isFavourite, toggleCart, toggleFavourites }) => {
  const handleFavourite = () => {
    toggleFavourites(itemId);
  };

  const handleCart = () => {
    toggleCart(itemId);
  };

  return (
    <div className="book-controllers" onClick={(e) => e.preventDefault()}>
      <div className="book-controllers-media">
        <Star
          className={`controllers-icon ${isFavourite && 'active-favourite'}`}
          alt="toFavorite"
          onClick={handleFavourite}
        />
        <img className="controllers-icon" src={share} alt="toShare" />
      </div>
      <div className="book-controllers-cart">
        <Pay className={`controllers-icon ${isCart && 'active-cart'}`} alt="toCart" onClick={handleCart} />
      </div>
    </div>
  );
};

BookControllers.propTypes = {
  itemId: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired,
  toggleFavourites: PropTypes.func.isRequired,
  isCart: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool.isRequired,
};
