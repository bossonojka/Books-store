import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = (props) => {
  const { className, title, onClick } = props;

  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  title: '',
};
