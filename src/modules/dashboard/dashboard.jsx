import React from 'react';

import { Dashboard } from '.././../components/dashboard/dashboard';

export default class DashboardContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.login.userLogin.isSuccess == true) {
      this.props.dataPollingRequest();
    }
  }
  render() {
    return (
      <Dashboard
        {...this.props}
      />
    );
  }
}
