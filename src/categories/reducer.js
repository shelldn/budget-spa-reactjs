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
const EDIT_DISCARD = `${prefix}/to_edit/DISCARD`;

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

    case EDIT_DISCARD:
    case EDIT_COMMIT:
      return null;

    default:
      return state;
  }
}

const EDIT_COMMIT = `${prefix}/to_edit/COMMIT`;

const commit = (state, action) => {
  switch (action.type) {
    case EDIT_COMMIT:
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

const list = (state = [], action) => {
  switch (action.type) {
    case EDIT_COMMIT:
      return state.map(c => commit(c, action));
    
    default:
      return state;
  }
};

export default combineReducers({
  list,
  add,
  edit
});
