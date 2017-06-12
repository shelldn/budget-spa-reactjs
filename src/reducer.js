import categories from './categories/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  months: (state = []) => state,
  categories,
  operations: (state = []) => state
});
