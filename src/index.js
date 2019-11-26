import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

//-- Component --//
import App from "./App";

//-- Store --//
import store from "./redux/store";

//-- Style --//
import "./index.css";

//-- Service Worker --//
import * as serviceWorker from "./serviceWorker";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
