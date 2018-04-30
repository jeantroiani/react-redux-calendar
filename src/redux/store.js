import { createStore } from 'redux';
import rootReducer from './rootReducer';

const preloadedState = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(
  rootReducer,
  preloadedState,
);

export default store;
