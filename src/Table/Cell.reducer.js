export const EDIT = 'budget-io/table/cell/EDIT';
const COMMIT = 'budget-io/table/cell/COMMIT';

export const editCell = (row, col, value) => ({
  type: EDIT,
  payload: {
    row,
    col,
    value
  }
});

export const commitCell = (row, col) => ({
  type: COMMIT,
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

    case COMMIT:
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
