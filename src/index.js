import React from "react";
import ReactDOM from "react-dom";

//-- Component --//
import App from "./App";

//-- Style --//
import "./index.css";

//-- Service Worker --//
import * as serviceWorker from "./serviceWorker";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
