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

const category = (state, action) => {
  switch (action.type) {
    case 'budget-io/categories/EDIT':
      if (state.id !== action.payload.id)
        return state;

      return {
        ...state,
        name: action.payload.newName
      };

    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case 'budget-io/categories/EDIT':
      return state.map(c => category(c, action));

    default:
      return state;
  }
};

export default combineReducers({
  months,
  categories,
  operations
});
