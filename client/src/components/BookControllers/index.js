import { BookControllers } from './BookControllers';
import { toggleCart } from '../../redux/cart/cart-actions';
import { toggleFavourites } from '../../redux/favourites/favourites-actions';
import { connect } from 'react-redux';
import { findFavouriteItem } from '../../redux/favourites/favourites-selectors';
import { findCartItem } from '../../redux/cart/cart-selectors';

const mapStateToProps = (state, props) => ({
  isCart: findCartItem(state, props),
  isFavourite: findFavouriteItem(state, props),
});

const mapDispatchToProps = {
  toggleCart,
  toggleFavourites,
};

const BookControllersContainer = connect(mapStateToProps, mapDispatchToProps)(BookControllers);

export { BookControllersContainer };
