const FETCH = 'budget-io/categories/FETCH';

const fetchCategoriesSuccess = (payload) => ({
  type: FETCH,
  payload
})

export const fetchCategories = (token, year) => (dispatch) => {
    fetch(`http://192.168.255.1:5000/api/budgets/${year}/categories`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(r => r.json().then(categories => { dispatch(fetchCategoriesSuccess(categories)); }));
}

export const addCategory = () => ({
  type: 'budget-io/categories/ADD'
});

export const addCategoryCommit = (name) => async (dispatch) => {
  const response = await fetch('http://192.168.255.1:5000/api/budgets/2017/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  });

  if (response.status > 400)
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

export const editCategoryCommit = (id, newName) => ({
  type: 'budget-io/categories/edit/COMMIT',
  payload: { id, newName }
});

export const deleteCategory = (id) => async (dispatch) => {

  const response = await fetch(`http://192.168.255.1:5000/api/categories/${id}`, {
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
        type: 'income'        
      };

    case 'budget-io/categories/add/COMMIT':
      if (!state.id)      
        return {
          ...state,
          id: 1000,
          name: action.payload.name
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
