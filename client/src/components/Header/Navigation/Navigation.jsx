import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Link } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = ({ cartSize }) => {
  return (
    <nav className="nav">
      <Link to="/books" className="nav-title">
        <h2>GetBooks</h2>
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/contacts" className="nav-link">
            Contacts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
          {cartSize !== 0 && <div className="nav-cart">{cartSize}</div>}
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link nav-btn">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  cartSize: PropTypes.number,
};
