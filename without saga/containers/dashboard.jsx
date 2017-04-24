import React from 'react';

import { Dashboard } from './../component/dashboard';
import styles from '../index.scss';

export class DashboardContainer extends React.Component {

  render() {
    return (
      <div className={styles.bg}>
        <Dashboard
          {...this.props}
        />
      </div>
    );
  }
}
