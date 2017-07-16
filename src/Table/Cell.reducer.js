export const EDIT = 'budget-io/table/cell/EDIT';

export const editCell = (row, col, value) => ({
  type: EDIT,
  payload: {
    row,
    col,
    value
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

    default:
      return state;
  }
};

export default cell;
