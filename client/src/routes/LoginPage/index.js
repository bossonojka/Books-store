import { connect } from 'react-redux';
import { setAuthStatus } from '../../redux/auth/auth-actions';
import { LoginPage } from './LoginPage';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {
  setAuthStatus,
};

export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
