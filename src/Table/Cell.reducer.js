export const EDIT = 'budget-io/table/cell/EDIT';
const RESET = 'budget-io/table/cell/RESET';

export const editCell = (row, col, value) => ({
  type: EDIT,
  payload: {
    row,
    col,
    value
  }
});

export const resetCell = (row, col) => ({
  type: RESET,
  payload: {
    row,
    col
  }
});

const cell = (state = null, action) => {
  switch (action.type) {
    case EDIT:
      return {
        row: action.payload.row,
        col: action.payload.col,
        isEditing: true
      };

    case RESET:
      return {
        row: action.payload.row,
        col: action.payload.col,
        isEditing: false
      };

    default:
      return state;
  }
};

export default cell;
