import React from 'react';

import { Dashboard } from '.././../components/dashboard/dashboard';

export default class DashboardContainer extends React.Component {

  render() {
    return (
      <Dashboard
        {...this.props}
      />
    );
  }
}
