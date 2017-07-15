import categories from './categories/reducer';
import operations from './operations/reducer';
import edit from './Operation/Edit.reducer';
import { reducer as table } from './Table';
import { combineReducers } from 'redux';

export default combineReducers({
  months: (state = []) => state,
  categories,
  operations,
  edit,
  table
});
