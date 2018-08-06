import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Oidc from 'oidc-client';
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

const config = {
  authority: "http://localhost:5001",
  client_id: "js",
  redirect_uri: "http://localhost:3000/callback.html",
  response_type: "id_token token",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:3000/index.html",
};

export const mgr = new Oidc.UserManager(config);

mgr.getUser().then(u => {
  if (u)
    console.log(u);
  else
    mgr.signinRedirect();
});

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
