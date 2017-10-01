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

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;

    default:
      return state;
  }
};
