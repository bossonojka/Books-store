import React from 'react';
import { Button } from '../../../components/_shared/Button';

const UserPage = ({ isAuth, setAuthStatus }) => {
  const handleChangeAuth = () => {
    setAuthStatus(!isAuth);
  };

  return (
    <div className="login-page-container logged-in">
      <div className="login-form">
        <h1 className="login-title">User Cabinet</h1>
        <div className="login-container">
          <Button className="login-submit" onClick={handleChangeAuth} title="Logout" />
        </div>
      </div>
    </div>
  );
};

export { UserPage };
