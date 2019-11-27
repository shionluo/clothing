import React, { useEffect } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Pages --//
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

//-- Components --//
import Header from "./components/header/header";

//-- Actions --//
import { setCurrentUser } from "./redux/user/user.action";

//-- Selectors --//
import { selectUserCurrent } from "./redux/user/user.selectors";

//-- Firebase --//
import { auth, createUserProfileDocument } from "./firebase/firebase";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
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
