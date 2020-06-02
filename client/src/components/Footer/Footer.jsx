import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container container-flex">
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <a className="footer-nav-link" href="/#">
                Privacy
              </a>
            </li>
            <li className="footer-nav-item">
              <a className="footer-nav-link" href="/#">
                Terms
              </a>
            </li>
          </ul>
          <div className="footer-logo">
            <h2 className="footer-title">GetBooks</h2>
            <span className="footer-text">2019-2020 GetBooks, inc</span>
          </div>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <a className="footer-nav-link" href="/#">
                Support
              </a>
            </li>
            <li className="footer-nav-item">
              <a className="footer-nav-link" href="/#">
                Sign up
              </a>
            </li>
            <li className="footer-nav-item">
              <a className="footer-nav-link" href="/#">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
