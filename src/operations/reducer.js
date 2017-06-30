const FETCH = 'budget-io/operations/FETCH';
const EDIT = 'budget-io/operations/EDIT';

export const editId = (state = {}, action) => {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        id: action.payload.id,
        type: action.payload.type
      };
    
    default:
      return state;
  }
}

const operations = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;    

    default:
      return state;      
  }
}

export default operations;
