import React from 'react';
import { BookControllersContainer } from '../../BookControllers';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bookType } from '../../../helpers/propTypes';

import './Book.scss';

export const Book = React.forwardRef(({ data }, ref) => {
  const { path } = useRouteMatch();
  return (
    <div className="book-cart" key={data.id} ref={ref}>
      <Link to={`${path}books/${data.id}`}>
        <div className="book">
          <h3 className="book-title">{data.title}</h3>
          <img className="book-img" src={data.img} alt="book" />
          <p className="book-text">{data.description}</p>
          <BookControllersContainer itemId={data.id} />
        </div>
      </Link>
    </div>
  );
});

Book.propTypes = {
  data: PropTypes.shape(bookType),
};
