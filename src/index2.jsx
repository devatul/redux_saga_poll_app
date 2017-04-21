import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';

import { LoginContainer } from './containers/login';
import { view } from './containers/main';
import { SignupContainer } from './containers/Signup';
import { DashboardContainer } from './containers/dashboard';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
       <Route path="/" component={view}>
        <IndexRoute component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />
        <Route path="dashboard" component={dashboardContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
