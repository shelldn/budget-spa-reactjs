import { COMMIT } from '../Operation/Edit.reducer';

const FETCH = 'budget-io/operations/FETCH';

const fetchOperationsSuccess = (payload) => ({
  type: FETCH,
  payload
})

export const fetchOperations = (token, year) => (dispatch) => {
  fetch('http://localhost:8080/api/budgets/2017/operations', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(r => r.json().then(operations => dispatch(fetchOperationsSuccess(operations))));
}

const operation = (state, action) => {
  switch (action.type) {
    case COMMIT:
      if (action.payload.id !== state.id)
        return state;

      return {
        ...state,
        plan: action.payload.value
      };
    
    default:
      return state;
  }
};

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;    

    case COMMIT:
      return state.map(o => operation(o, action));

    default:
      return state;      
  }
};
