import React from 'react';

import { Dashboard } from '.././../components/dashboard/dashboard';
import styles from '../../index.scss';

export class DashboardContainer extends React.Component {

  render() {
    return (
      <Dashboard
        {...this.props}
      />
    );
  }
}
