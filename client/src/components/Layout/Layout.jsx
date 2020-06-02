import React from 'react';
import { connect } from 'react-redux';

import { LoginPageContainer } from '../../routes/LoginPage';
import { Header } from '../Header';
import { Footer } from '../Footer';
import PropTypes from 'prop-types';

import './Layout.scss';

const Layout = ({ children, isAuth }) => {
  if (!isAuth) return <LoginPageContainer />;

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

Layout.propTypes = {
  children: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
};

export const LayoutContainer = connect(mapStateToProps, null)(Layout);
