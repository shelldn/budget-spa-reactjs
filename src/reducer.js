const initialState = {
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  categories: [
    { id: 10, order: 10, type: 'income', name: 'Salary' },
    { id: 20, order: 20, type: 'income', name: 'Bank Deposit' },
    { id: 30, order: 30, type: 'outgo', name: 'Food' },
    { id: 40, order: 40, type: 'outgo', name: 'Car' },
    { id: 50, order: 50, type: 'outgo', name: 'Dogs' }
  ],
  operations: [
    { id: 10, categoryId: 10, month: 6, plan: 10, fact: 20 }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
}

export default reducer;
