import React from 'react';
import { withRouter } from 'react-router';
import styles from '../index2.scss';

export class SideBarUser extends React.Component {
  render() {
    return (
      <div className={styles.appaside}>
        <div className={styles.appasideleft}>
          <div className={styles.adminlogo} onClick={this.props.title}>USER PANEL</div>
          <div className={styles.comp} onClick={this.props.logout}>Log Out</div>
        </div>
      </div>
    );
  }
}
