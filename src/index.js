import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import BudgetTable from './BudgetTable';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/budgets/:id" component={BudgetTable} />
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
