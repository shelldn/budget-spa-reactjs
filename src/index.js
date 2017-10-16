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

export const token = process.env.REACT_APP_TOKEN;

const year = (new Date()).getFullYear();

store.dispatch(fetchCategories(token, year));
store.dispatch(fetchOperations(token, year));

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
