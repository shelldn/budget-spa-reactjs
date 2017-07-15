const REGISTER = 'budget-io/table/body/REGISTER';
const SELECT = 'budget-io/table/cell/SELECT';
const EDIT = 'budget-io/table/cell/EDIT';
const PREVIOUS = 'budget-io/table/row/PREVIOUS';
const NEXT = 'budget-io/table/row/NEXT';
const LEFT = 'budget-io/table/col/PREVIOUS';
const RIGHT = 'budget-io/table/col/NEXT';

const initialState = {
  row: 0,
  col: 0,
  bodies: []
};

let bodyIdx = 1;

const body = (state, action) => {
  switch (action.type) {
    case REGISTER:
      const { childrenCount } = action.payload;
      return {
        id: bodyIdx++,
        childrenCount
      };
    
    default:
      return state;      
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER:
      return {
        ...state,
        bodies: [
          ...state.bodies,
          body(null, action)
        ]
      };

    case SELECT:
      return {
        ...state,
        row: action.payload.row,
        col: action.payload.col,
        isEditing: false
      }

    case EDIT:
      return {
        ...state,
        row: action.payload.row,
        col: action.payload.col,
        isEditing: true
      };

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
