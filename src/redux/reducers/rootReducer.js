import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  newsReducer,
  appReducer,
});

export default rootReducer;
