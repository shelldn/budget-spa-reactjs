import { host, port } from '../config';

const FETCH = 'budget-io/operations/FETCH';

export const fetchOperations = (token, year) => async (dispatch) => {

  const response = await fetch(`http://${host}:${port}/api/budgets/2017/operations`);

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

export const addPlanCommit = (categoryId, month, plan) => async (dispatch) => {
  const response = await fetch(`http://${host}:${port}/api/budgets/2017/operations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ categoryId, month, plan })
  });

  if (response.status >= 400)
    throw new Error('Add operation failure.');

  dispatch({
    type: 'budget-io/operations/plan/add/COMMIT',
    payload: await response.json()
  });
};

export const addFact = (categoryId, month) => ({
  type: 'budget-io/operations/fact/ADD',
  payload: {
    categoryId,
    month
  }
});

export const addFactCommit = (categoryId, month, fact) => async (dispatch) => {
  const response = await fetch(`http://${host}:${port}/api/budgets/2017/operations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ categoryId, month, fact })
  });

  if (response.status >= 400)
    throw new Error('Add operation failure');

  dispatch({
    type: 'budget-io/operations/fact/add/COMMIT',
    payload: await response.json()
  });
};

export class InitOperation {
  constructor(categoryId, month, plan, fact) {
    this.categoryId = categoryId;
    this.month = month;
    this.plan = plan;
    this.fact = fact;
  }
}

export class InitPlan {
  constructor() {
    this.value = 0;
  }
}

export class InitFact {
  constructor() {
    this.value = 0;
  }
}

const operation = (state, action) => {
  switch (action.type) {
    case 'budget-io/operations/plan/ADD':
      return new InitOperation(
        action.payload.categoryId,
        action.payload.month,
        new InitPlan(),
        0
      );

    case 'budget-io/operations/plan/add/COMMIT':
      if (state instanceof InitOperation)
        return {
          ...state,
          id: 1,
          plan: action.payload.plan
        };

      return state;

    case 'budget-io/operations/fact/ADD':
      return new InitOperation(
        action.payload.categoryId,
        action.payload.month,
        0,
        new InitFact()
      );

    case 'budget-io/operations/fact/add/COMMIT':
      if (state instanceof InitOperation)
        return {
          ...state,
          id: 1,
          fact: action.payload.fact
        };

      return state;

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
        ...state.filter(o => !(o instanceof InitOperation)),
        operation(undefined, action)
      ];

    case 'budget-io/operations/plan/add/COMMIT':
      return state.map(o => operation(o, action));

    case 'budget-io/operations/fact/ADD':
      return [
        ...state.filter(o => !(o instanceof InitOperation)),
        operation(undefined, action)
      ];

    case 'budget-io/operations/fact/add/COMMIT':
      return state.map(o => operation(o, action));

    default:
      return state;      
  }
};
