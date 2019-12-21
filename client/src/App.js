import React, { useEffect, lazy, Suspense } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//-- Components --//
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error.boundary.component';

//-- Actions --//
import { checkUserSession } from './redux/user/user.actions';

//-- Selectors --//
import { selectUserCurrent } from './redux/user/user.selectors';

//-- Styles --//
import { GlobalStyle } from './global.styles';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

// Lazy
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckOut = lazy(() => import('./pages/checkout/checkout.component'));

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/checkout" component={CheckOut} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
