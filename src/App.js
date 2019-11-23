import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//-- Pages --//
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
