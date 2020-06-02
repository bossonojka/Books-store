import PropTypes from 'prop-types';

export const bookType = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  img: PropTypes.string,
  category: PropTypes.string,
};

export const orderListType = {
  id: PropTypes.number,
  count: PropTypes.number,
};
