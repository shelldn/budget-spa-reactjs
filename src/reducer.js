const initialState = {
  categories: [
    { id: 10, order: 10, type: 'income', name: 'Salary' },
    { id: 20, order: 20, type: 'income', name: 'Bank Deposit' },
    { id: 30, order: 30, type: 'outgo', name: 'Food' },
    { id: 40, order: 40, type: 'outgo', name: 'Car' },
    { id: 50, order: 50, type: 'outgo', name: 'Dogs' }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
}

export default reducer;
