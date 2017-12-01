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

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;    

    default:
      return state;      
  }
};
