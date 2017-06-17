const PREVIOUS = 'budget-io/table/row/PREVIOUS';
const NEXT = 'budget-io/table/row/NEXT';

const reducer = (state = null, action) => {
  switch (action.type) {

    case PREVIOUS:
      return {
        ...state,
        row: --state.row
      };

    case NEXT:
      return {
        ...state,
        row: ++state.row
      };

    default:
      return state;
  }
}

export default reducer;
