import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  app: appReducer,
});

export default rootReducer;
