import categories from './categories/reducer';
import table from './Table/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  months: (state = []) => state,
  categories,
  operations: (state = []) => state,
  table
});
