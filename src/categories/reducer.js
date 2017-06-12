import { combineReducers } from 'redux';

const prefix = 'budget-io/categories';
const ADD = `${prefix}/ADD`;
const ADD_EDIT = `${prefix}/to_add/EDIT`;

const add = (state = null, action) => {
  switch (action.type) {

    case ADD:
      return {
        name: ''
      };

    case ADD_EDIT:
      return {
        ...state,
        name: action.payload.newName
      };

    default:
      return state;
  }
};

const EDIT = `${prefix}/EDIT`;
const EDIT_EDIT = `${prefix}/to_edit/EDIT`;

const edit = (state = null, action) => {
  switch (action.type) {
    
    case EDIT:
      return {
        id: action.payload.id,
        name: action.payload.name
      };

    case EDIT_EDIT:
      return {
        ...state,
        name: action.payload.newName
      };

    default:
      return state;
  }
}

export default combineReducers({
  list: (state = []) => state,
  add,
  edit
});
