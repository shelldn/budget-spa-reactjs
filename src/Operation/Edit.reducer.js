import { token } from '../index.js';
import { EDIT } from '../Table/Cell.reducer';

const CHANGE = 'budget-io/operation/edit/CHANGE';

export const changeOperation = (value) => ({
  type: CHANGE,
  payload: {
    value
  }
});

export const commitOperation = (id, cb) => (dispatch) => {
  fetch(`http://localhost:8080/api/operations/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`
    }    
  });

  cb();
};

const initialState = {
  value: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        value: action.payload.value
      };

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
