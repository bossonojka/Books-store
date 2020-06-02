import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Contacts } from './components/Contacts';
import { BooksContainer } from './components/Books';
import { CartContainer } from './components/Cart';
import { BookPageContainer } from './components/BookPage';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { LayoutContainer } from './components/Layout/Layout';
import { LoginPageContainer } from './routes/LoginPage';

import './styles/main.scss';

const App = () => (
  <ErrorBoundary>
    <LayoutContainer>
      <Switch>
        <Route path="/books/:id" component={BookPageContainer} />
        <Route path="/login" component={LoginPageContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={BooksContainer} />
      </Switch>
    </LayoutContainer>
  </ErrorBoundary>
);

export default App;
