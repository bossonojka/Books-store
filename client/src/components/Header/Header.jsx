import React from 'react';

import { NavigationContainer } from './Navigation/';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <NavigationContainer />
      </div>
    </header>
  );
};
