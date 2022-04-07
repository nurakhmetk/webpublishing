import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { appReducer } from './appReducer';
import { newsCategoriesReducer } from './newsCategoriesReducer';

const rootReducer = combineReducers({
  newsReducer,
  newsCategoriesReducer,
  appReducer,
});

export default rootReducer;
