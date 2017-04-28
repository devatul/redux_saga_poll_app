import React from 'react';

import { Dashboard } from '.././../components/dashboard/dashboard';
import * as actions from '../../actions/actions';

export class DashboardContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.login.userLogin.isSuccess == true && props.login.userLogin.isSuccess == true ) {
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
DashboardContainer.propTypes = {
  dataPollingRequest:React.PropTypes.func
};
