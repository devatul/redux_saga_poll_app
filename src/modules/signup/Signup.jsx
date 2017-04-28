import React from 'react';
import styles from '../../index.scss';
import { Signup } from '.././../components/signup/signup';

export class SignupContainer extends React.Component {

  render() {
    return (
      <Signup
        {...this.props}
      />
    );
  }
}
