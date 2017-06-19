const PREVIOUS = 'budget-io/table/row/PREVIOUS';
const NEXT = 'budget-io/table/row/NEXT';
const LEFT = 'budget-io/table/col/PREVIOUS';
const RIGHT = 'budget-io/table/col/NEXT';

const initialState = {
  row: 0,
  col: 0
};

const reducer = (state = initialState, action) => {
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

    case LEFT:
      return {
        ...state,
        col: --state.col
      };

    case RIGHT:
      return {
        ...state,
        col: ++state.col
      };

    default:
      return state;
  }
}

export default reducer;
