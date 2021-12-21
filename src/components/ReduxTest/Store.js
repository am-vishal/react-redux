import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware)
)

