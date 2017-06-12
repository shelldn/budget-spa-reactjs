import { combineReducers } from 'redux';

const prefix = 'budget-io/categories';
const ADD = `${prefix}/ADD`;
const EDIT = `${prefix}/to_add/EDIT`;

const add = (state = null, action) => {
  switch (action.type) {

    case ADD:
      return {
        name: ''
      };

    case EDIT:
      return {
        ...state,
        name: action.payload.newName
      };

    default:
      return state;
  }
};

export default combineReducers({
  list: (state = []) => state,
  add
});
