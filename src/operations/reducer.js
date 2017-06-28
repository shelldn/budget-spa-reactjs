const FETCH = 'budget-io/operations/FETCH';

const operations = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;    

    default:
      return state;      
  }
}

export default operations;
