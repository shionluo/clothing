import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//-- Pages --//
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

//-- Components --//
import Header from "./components/Header/header";

//-- Firebase --//
import { auth } from "./firebase/firebase";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
