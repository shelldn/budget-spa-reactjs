const initialState = {
  categories: [
    { id: 10, type: 'income', name: 'Salary' },
    { id: 20, type: 'income', name: 'Bank Deposit' },
    { id: 30, type: 'outgo', name: 'Food' },
    { id: 40, type: 'outgo', name: 'Car' },
    { id: 50, type: 'outgo', name: 'Dogs' }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
}

export default reducer;
