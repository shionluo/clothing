import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

//-- Component --//
import App from './App';

//-- Store --//
import { store, persistor } from './redux/store';

//-- Style --//
import './index.css';

//-- Service Worker --//
import * as serviceWorker from './serviceWorker';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
