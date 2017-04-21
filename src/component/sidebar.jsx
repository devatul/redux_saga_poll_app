import React from 'react';
// import { withRouter } from 'react-router';
import styles from '../index2.scss';

export default class SideBar extends React.Component {
  render() {
    return (
      <div className={styles.appaside}>
        <div className={styles.appasideleft}>
          <div className={styles.adminlogo} onClick={this.props.title}>ADMIN PANEL</div>
          <div className={styles.comp} onClick={this.props.userslist}>View Users</div>
          <div className={styles.comp} onClick={this.props.pollslist}>View Polls</div>
          <div className={styles.comp} onClick={this.props.logout}>Log Out</div>
        </div>
      </div>
    );
  }
}
