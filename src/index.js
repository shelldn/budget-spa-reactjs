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
    list: [],
    add: null
  },
  operations: []
};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

const token = process.env.REACT_APP_TOKEN;

fetch('http://localhost:8080/api/budgets/2017/categories', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json().then(categories => store.dispatch({ type: 'budget-io/categories/FETCH', payload: categories })));

fetch('http://localhost:8080/api/budgets/2017/operations', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json().then(operations => store.dispatch({ type: 'budget-io/operations/FETCH', payload: operations })));

document.addEventListener('keydown', e => {
  let type;

  switch (e.keyCode) {
    case 38: // Up
      type = 'budget-io/table/row/PREVIOUS';
      break;
    
    case 40: // Down
      type = 'budget-io/table/row/NEXT';
      break;

    case 37: // Left
      type = 'budget-io/table/col/PREVIOUS';
      break;

    case 39:
      type = 'budget-io/table/col/NEXT';
      break;

    default:
      return;
  }

  store.dispatch({
    type
  })
});

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
