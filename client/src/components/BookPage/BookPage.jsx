import React, { useEffect, useState } from 'react';
import back from '../../assets/back.svg';
import { BookControllersContainer } from '../BookControllers';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bookType } from '../../helpers/propTypes';

import './BookPage.scss';

export const BookPage = ({ match, books, getBookById }) => {
  const [current, setCurrent] = useState(null);
  const {
    params: { id },
  } = match;

  useEffect(() => {
    let bookFromStore = books.find((item) => item.id === Number(id));
    if (!bookFromStore) {
      getBookById(id).then((res) => {
        setCurrent(res.currentBook);
      });
      return;
    }
    setCurrent(bookFromStore);
  }, [books, id, getBookById]);

  return (
    <div className="book-page">
      <Link to={`/books`}>
        <img className="back" src={back} alt="back" />
      </Link>
      {current && (
        <div className="book-page-cont">
          <img className="book-page-img" src={current.img} alt="desc" />
          <div className="book-page-info">
            <h2 className="book-page-title">{current.title}</h2>
            <p className="book-page-text">{current.description}</p>
            <BookControllersContainer itemId={Number(id)} />
          </div>
        </div>
      )}
    </div>
  );
};

BookPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
  getBookById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
