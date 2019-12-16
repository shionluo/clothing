import React, { useEffect } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//-- Pages --//
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOut from './pages/checkout/checkout.component';

//-- Components --//
import Header from './components/header/header.component';

//-- Actions --//
import { checkUserSession } from './redux/user/user.actions';

//-- Selectors --//
import { selectUserCurrent } from './redux/user/user.selectors';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

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
        <Header />
        <Switch>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
