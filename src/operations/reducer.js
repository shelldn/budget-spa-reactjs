const FETCH = 'budget-io/operations/FETCH';
const EDIT = 'budget-io/operations/EDIT';
const CHANGE = 'budget-io/operations/CHANGE';
const COMMIT = 'budget-io/operations/COMMIT';

export const editId = (state = {}, action) => {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value
      };

    case CHANGE:
      return {
        ...state,
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value
      };

    case COMMIT:
      return {};
    
    default:
      return state;
  }
}

const operation = (state, action) => {
  switch (action.type) {
    case COMMIT:
      if (action.payload.id !== state.id)
        return state;

      return {
        ...state,
        [action.payload.type]: action.payload.value
      };
    
    default:
      return state;
  }
};

const operations = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;    

    case COMMIT:
      return state.map(o => operation(o, action));

    default:
      return state;      
  }
}

export default operations;
