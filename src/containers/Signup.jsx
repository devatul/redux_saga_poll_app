import React from 'react';
import styles from '../index.scss';
import { Signup } from './../component/signup';
export class SignupContainer extends React.Component {

  render() {
    return (
      <div className={styles.bg}>
        <Signup
          {...this.props}
        />
      </div>
    );
  }
}
