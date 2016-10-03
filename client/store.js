/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './components/DevTools';
import rootReducer from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import pageMiddleware from './middlewares/pageMiddleware';

export function configureStore(initialState = {}) {
  // Middleware and store enhancers

  let enhancers = [
    applyMiddleware(thunk, promise),
  ];


  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    const logger = createLogger();
    enhancers = [
      applyMiddleware(thunk, promise, logger, pageMiddleware),
    ];
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
