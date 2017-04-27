import React from 'react';

import { Dashboard } from '.././../components/dashboard/dashboard';
import * as actions from '../../actions/actions';

export class DashboardContainer extends React.Component {

  componentWillReceiveProps(props) {
    console.log(props.polling,'asd');
    if (props.login.userLogin.isSuccess == true && props.login.userLogin.isSuccess == true ) {
      this.props.DATA_POLLING_REQUEST();
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
