import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import history from '../utils/history';
const middleware = routerMiddleware(history);

// Import custom components
import rootReducer from '../reducers/rootReducer';

// Redux store to hold the app state
const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware, middleware, logger)
));

export default store;