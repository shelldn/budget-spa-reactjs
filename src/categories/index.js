import { mgr } from '..';
import { host, port } from '../config';

const FETCH = 'budget-io/categories/FETCH';

export const fetchCategories = (year) => async (dispatch) => {
  const user = await mgr.getUser();
  const response = await fetch(`http://${host}:${port}/api/budgets/${year}/categories`, {
    headers: {
      Authorization: `Bearer ${user.access_token}`
    }
  });

  if (response.status >= 400)
    throw new Error('Failed to fetch categories');

  dispatch({
    type: FETCH,
    payload: await response.json()
  });
}

export const addCategory = (type) => ({
  type: 'budget-io/categories/ADD',
  payload: { type }
});

export const addCategoryCommit = (budgetId, type, name) => async (dispatch) => {
  const user = await mgr.getUser();
  const response = await fetch(`http://${host}:${port}/api/budgets/${budgetId}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.access_token}`
    },
    body: JSON.stringify({ type, name })
  });

  if (response.status >= 400)
    throw new Error('Add category failure.');

  const payload = await response.json();
  
  dispatch({
    type: 'budget-io/categories/add/COMMIT',
    payload
  });
}

export const editCategory = (id) => ({
  type: 'budget-io/categories/EDIT',
  payload: { id }
});

export const editCategoryCommit = (id, newName) => async (dispatch) => {
  const response = await fetch(`http://${host}:${port}/api/categories/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: newName })
  });

  if (response.status >= 400)
    throw new Error('Add category failure.');

  dispatch({
    type: 'budget-io/categories/edit/COMMIT',
    payload: { id, newName }
  });
};

export const deleteCategory = (id) => async (dispatch) => {

  const response = await fetch(`http://${host}:${port}/api/categories/${id}`, {
    method: 'DELETE'
  });

  if (response.status > 400)
    throw new Error('Delete category failure.');

  dispatch({
    type: 'budget-io/categories/DELETE',
    payload: { id }
  });
};

const category = (state, action) => {
  switch (action.type) {
    case 'budget-io/categories/ADD':
      return {
        id: '',
        type: action.payload.type
      };

    case 'budget-io/categories/add/COMMIT':
      if (!state.id)      
        return {
          ...state,
          ...action.payload
        };

      return state;

    case 'budget-io/categories/EDIT':
      if (state.id === action.payload.id)
        return {
          ...state,
          isEditing: true
        };

      if (state.isEditing)
        return {
          ...state,
          isEditing: false
        };

      return state;

    case 'budget-io/categories/edit/COMMIT':
      if (state.id === action.payload.id)
        return {
          ...state,
          isEditing: false,
          name: action.payload.newName,
        };

      return state;

    default:
      return state;
  }
}

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;

    case 'budget-io/categories/ADD':
      return [
        ...state,
        category(undefined, action)
      ];

    case 'budget-io/categories/add/COMMIT':
      return state.map(c => category(c, action));

    case 'budget-io/categories/EDIT':
      return state.map(c => category(c, action));

    case 'budget-io/categories/edit/COMMIT':
      return state.map(c => category(c, action));

    case 'budget-io/categories/DELETE':
      return state.filter(c => c.id !== action.payload.id);

    default:
      return state;
  }
};
