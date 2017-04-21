import React from 'react';

import { Login } from './../component/login';
import styles from '../index2.scss';
import { Signup } from './../component/signup';
export class SignupContainer extends React.Component {

  render() {
    return (
      <div className={styles.bg}>
        <Signup />
      </div>
    );
  }
}
