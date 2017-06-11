import { combineReducers } from 'redux';

const operation = (state, action) => {
  switch (action.type) {
    case 'EDIT_INCOME_PLAN':
      if (state.id !== action.payload.id)
        return state;

      return {
        ...state,
        plan: action.payload.newValue        
      };

    default:
      return state;
  }
}

const operations = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_INCOME_PLAN':
      return state.map(i => operation(i, action));
    default:
      return state;
  }
}

const months = (state = [], action) => state;
const categories = (state = [], action) => state;

export default combineReducers({
  months,
  categories,
  operations
});
