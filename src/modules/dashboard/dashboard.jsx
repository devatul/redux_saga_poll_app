import React from 'react';

import Dashboard from '.././../components/dashboard/dashboard';

export default class DashboardContainer extends React.Component {

  componentWillMount() {
    if (this.props.login.userLogin.data.length === 0) {
      this.props.history.push('/');
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
  login: React.PropTypes.isRequired,
  history: React.PropTypes.isRequired,
};
