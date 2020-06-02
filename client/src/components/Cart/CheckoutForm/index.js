import { CheckoutForm } from './CheckoutForm';
import { connect } from 'react-redux';
import { checkout } from '../../../redux/cart/cart-actions';

const mapDispatchToProps = {
  checkout,
};

const CheckoutFormContainer = connect(null, mapDispatchToProps)(CheckoutForm);

export { CheckoutFormContainer };
