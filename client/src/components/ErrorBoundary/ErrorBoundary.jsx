import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div className="error">
        <h2 className="error-msg">Error: {error.message}</h2>
        <span className="error-text">{info.componentStack}</span>
      </div>
    ) : (
      children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};
