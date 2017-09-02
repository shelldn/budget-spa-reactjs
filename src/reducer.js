import { reducer as categories } from './categories';
import { reducer as operations } from './operations';
import operationEdit from './Operation/Edit.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  months: (state = []) => state,
  categories,
  operations,
  operationEdit
});
