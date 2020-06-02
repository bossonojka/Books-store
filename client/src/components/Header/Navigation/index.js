import { Navigation } from './Navigation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  cartSize: state.cart.cart.length,
});

const NavigationContainer = connect(mapStateToProps, null)(Navigation);

export { NavigationContainer };
