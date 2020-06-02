import React, { useState } from 'react';
import { UserPage } from './UserPage/UserPage';
import { Button } from '../../components/_shared/Button';

import './LoginPage.scss';

const LoginPage = ({ isAuth, setAuthStatus }) => {
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState({});

  const loginValidate = () => {
    const errorsObject = { ...errors };
    const isValidEmail = new RegExp(/^(\w+\.?\w+?|\d+\.?\d+\{4})([@])(\w+|\d+)\.{1}(\w+|\d+)$/g).test(formData.email);
    const isValidPassword = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6}/g).test(formData.password);

    if (!isValidEmail) errorsObject.email = 'Email is invalid';

    if (!isValidPassword) errorsObject.password = 'Password is invalid';

    if (errorsObject.email || errorsObject.password) {
      setErrors(errorsObject);
      return;
    }

    setAuthStatus(!isAuth);
  };

  const handleSetFormData = ({ target }) => {
    if (errors.email || errors.password) setErrors({ email: '', password: '' });

    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  if (isAuth) return <UserPage isAuth={isAuth} setAuthStatus={setAuthStatus} />;

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h1 className="login-title">You can login here</h1>
        <h3 className="login-title small">and buy books</h3>
        <div className="login-container">
          <div className="input-container">
            <p className="email-description">Email</p>
            <input
              className={`email-pass-input ${errors.email && 'with-error'}`}
              type="text"
              name="email"
              placeholder="Enter your email here"
              onChange={handleSetFormData}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-container">
            <p className="email-description">Password</p>
            <input
              className={`email-pass-input ${errors.password && 'with-error'}`}
              type="password"
              name="password"
              placeholder="Enter your password here"
              onChange={handleSetFormData}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <Button className="login-submit" onClick={loginValidate} title="Login" />
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
