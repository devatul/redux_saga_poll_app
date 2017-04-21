import React from 'react';

import { dashboard } from './../component/dashboard';
import styles from '../index2.scss';

export class dashboardContainer extends React.Component {

  render() {
    return (
      <div className={styles.bg}>
        <dashboard
          {...this.props}
        />
      </div>
    );
  }
}
