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

export const editPlan = (operation) => ({
  type: 'budget-io/operations/plan/EDIT',
  payload: operation
});

export const editFact = (operation) => ({
  type: 'budget-io/operations/fact/EDIT',
  payload: operation
});

export const editPlanCommit = (id, plan) => async (dispatch) => {
  const response = await fetch(`http://${host}:${port}/api/operations/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ plan })
  });

  if (response.status >= 400)
    throw new Error('Edit operations failure.');

  dispatch({
    type: 'budget-io/operations/plan/edit/COMMIT',
    payload: {
      plan
    }
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

export class EditOperationModel {
  constructor(id, categoryId, month, plan, fact) {
    this.id = id;
    this.categoryId = categoryId;
    this.month = month;
    this.plan = plan;
    this.fact = fact;
  }
}

export class EditPlanModel {
  constructor(value) {
    this.value = value;
  }
}

export class EditFactModel {
  constructor(value) {
    this.value = value;
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

    case 'budget-io/operations/plan/EDIT':
      const {
        id,
        categoryId,
        month,
        plan,
        fact
      } = action.payload;

      return new EditOperationModel(
        id,
        categoryId,
        month,
        new EditPlanModel(plan),
        fact
      );

    case 'budget-io/operations/fact/EDIT':
      return new EditOperationModel(
        action.payload.categoryId,
        action.payload.month,
        action.payload.plan,
        new EditFactModel(action.payload.fact)
      );

    case 'budget-io/operations/plan/edit/COMMIT':
      if (state instanceof EditOperationModel)
        return {
          ...state,
          plan: action.payload.plan
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

    case 'budget-io/operations/plan/EDIT':
      return [
        ...state.filter(o => o.id !== action.payload.id),
        operation(undefined, action)
      ];

    case 'budget-io/operations/fact/EDIT':
      return [
        ...state.filter(o => o.id !== action.payload.id),
        operation(undefined, action)
      ];

    case 'budget-io/operations/plan/edit/COMMIT':
      return state.map(o => operation(o, action));

    default:
      return state;      
  }
};
