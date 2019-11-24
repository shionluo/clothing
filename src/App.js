import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//-- Pages --//
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

//-- Components --//
import Header from "./components/Header/header";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
