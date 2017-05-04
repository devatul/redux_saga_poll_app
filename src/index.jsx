/* global document*/
/* eslint no-undef: "error"*/
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import './index.scss';

import LoginContainer from './modules/login/login';
import { view } from './modules/main';
import DashboardContainer from './modules/dashboard/dashboard';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={view}>
        <IndexRoute component={LoginContainer} />
        <Route path="dashboard" component={DashboardContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
