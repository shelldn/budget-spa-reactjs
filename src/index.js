import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { HashRouter as Router, Route } from 'react-router-dom';
import BudgetTable from './BudgetTable';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  categories: {
    list: [
      { id: 10, order: 10, type: 'income', name: 'Salary' },
      { id: 20, order: 20, type: 'income', name: 'Bank Deposit' },
      { id: 25, order: 25, type: 'income', name: 'Business' },
      { id: 30, order: 30, type: 'outgo', name: 'Food' },
      { id: 40, order: 40, type: 'outgo', name: 'Car' },
      { id: 50, order: 50, type: 'outgo', name: 'Dogs' }
    ],
    add: null
  },
  operations: [
    { id: 10, categoryId: 10, month: 6, plan: 10, fact: 20 },
    { id: 15, categoryId: 20, month: 6, plan: 33, fact: 3 },
    { id: 16, categoryId: 25, month: 6, plan: 87, fact: 77 },
    { id: 20, categoryId: 20, month: 7, plan: 100, fact: 0 },
    { id: 30, categoryId: 50, month: 6, plan: 600, fact: 900 },
  ]
};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/budgets/:id" component={BudgetTable} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
