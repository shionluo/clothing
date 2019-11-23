import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//-- Pages --//
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
