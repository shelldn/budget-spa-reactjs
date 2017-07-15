import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { HashRouter as Router, Route } from 'react-router-dom';
import { fetchCategories } from './categories';
import { fetchOperations } from './operations';
import BudgetTable from './BudgetTable';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

const token = process.env.REACT_APP_TOKEN;

store.dispatch(fetchCategories(token, 2017));
store.dispatch(fetchOperations(token, 2017));

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

    case 39: // Right
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
