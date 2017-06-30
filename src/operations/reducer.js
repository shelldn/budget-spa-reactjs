const FETCH = 'budget-io/operations/FETCH';
const COMMIT = 'budget-io/operations/COMMIT';

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
