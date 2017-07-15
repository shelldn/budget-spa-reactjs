const CHANGE = 'budget-io/operation/edit/CHANGE';

export const changeOperation = (value) => ({
  type: CHANGE,
  payload: {
    value
  }
})

const initialState = {
  value: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
