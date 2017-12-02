import { host, endpoints } from '../configuration';

const FETCH = 'budget-io/operations/FETCH';

export const fetchOperations = (token, year) => async (dispatch) => {

  const response = await fetch(`${host}${endpoints.operationsUrl.replace(':year', 2017)}`);

  dispatch({
    type: FETCH,
    payload: await response.json()
  });
}

export const addPlan = (categoryId, month) => ({
  type: 'budget-io/operations/plan/ADD',
  payload: {
    categoryId,
    month
  }
});

const operation = (state, action) => {
  switch (action.type) {
    case 'budget-io/operations/plan/ADD':
      return {
        categoryId: action.payload.categoryId,
        month: action.payload.month,
        plan: 0
      };

    default:
      return state;
  }
};

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;    

    case 'budget-io/operations/plan/ADD':
      return [
        ...state,
        operation(undefined, action)
      ];

    default:
      return state;      
  }
};
