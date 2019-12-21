import React, { Component } from 'react';
import error from '../../assets/error/error.png';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={error} />
          <ErrorImageText>Sorry, This page isn't available</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
