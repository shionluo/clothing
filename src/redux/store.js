import { createStore, applyMiddleware } from "redux";

//-- Middleware --//
import logger from "redux-logger";

//-- Reducers --//
import rootReducer from "./root.reducer";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
