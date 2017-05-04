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
import SignupContainer from './modules/signup/Signup';
import DashboardContainer from './modules/dashboard/dashboard';
import EditPollContainer from './modules/editPoll/editPoll';
import AddPollContainer from './modules/addPoll/addPoll';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={view}>
        <IndexRoute component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="edit-poll" component={EditPollContainer} />
        <Route path="add-poll" component={AddPollContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
