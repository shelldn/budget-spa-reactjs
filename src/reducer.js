import categories from './categories/reducer';
import operations from './operations/reducer';
import { editId } from './operations/reducer';
import table from './Table/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  months: (state = []) => state,
  categories,
  operations,
  editId,
  table
});
