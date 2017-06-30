const EDIT = 'budget-io/operations/EDIT';
const CHANGE = 'budget-io/operations/CHANGE';

export const change = (value) => ({
  type: CHANGE,
  payload: {
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
    
    default:
      return state;
  }
}

export default reducer;
