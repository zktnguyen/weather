import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
