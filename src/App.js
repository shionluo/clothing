import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//-- Components --//
import HomePage from "./pages/homepage/homepage";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
