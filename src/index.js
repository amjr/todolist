import React from 'react';
import ReactDOM from 'react-dom';
import App from 'config/App';

import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import { Provider } from 'react-redux';

import reducers from './store/reducers';

function configureStore(preloadedState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(combineReducers(reducers), preloadedState, composeEnhancers(applyMiddleware(thunk)));
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
