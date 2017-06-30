const EDIT = 'budget-io/operations/EDIT';
const CHANGE = 'budget-io/operations/CHANGE';
const COMMIT = 'budget-io/operations/COMMIT';

export const change = (value) => ({
  type: CHANGE,
  payload: {
    value
  }
})

export const commit = (id, type, value) => ({
  type: COMMIT,
  payload: {
    id,
    type,
    value
  }
})

const reducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT:
      return action.payload;

    case CHANGE:
      return {
        ...state,
        value: action.payload.value
      };

    case COMMIT:
      return {};
    
    default:
      return state;
  }
}

export default reducer;
