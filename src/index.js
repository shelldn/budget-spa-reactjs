import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import BudgetTable from './BudgetTable';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';
import './index.css';

const initialState = {
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);

const App = ({ match }) => {
  const id = parseInt(match.params.id, 10);

  return (
    <div>
      <header>
        <Link to={`/budgets/${id - 1}`}>&lt;</Link>
        {match.params.id}
        <Link to={`/budgets/${id + 1}`}>&gt;</Link>
      </header>
      <BudgetTable id={id} />
    </div>
  )
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/budgets/:id" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
