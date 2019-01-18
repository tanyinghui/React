import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// Import custom components
import pathReducer from './pathReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    path: pathReducer,
    form: formReducer,
})