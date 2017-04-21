import React from 'react';

import { Login } from './../component/login';
import styles from '../index2.scss';

export class LoginContainer extends React.Component {

  render() {
    return (
      <div className={styles.bg}>
        <Login
          {...this.props}
        />
      </div>
    );
  }
}