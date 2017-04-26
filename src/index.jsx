import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

import { LoginContainer } from './modules/login/login';
import { view } from './modules/main';
import { SignupContainer } from './modules/signup/Signup';
import { DashboardContainer } from './modules/dashboard/dashboard';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={view}>
        <IndexRoute component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />
        <Route path="dashboard/:data" component={DashboardContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
