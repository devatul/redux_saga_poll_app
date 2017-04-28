import React from 'react';
import { Signup } from '.././../components/signup/signup';

export default class SignupContainer extends React.Component {

  render() {
    return (
      <Signup
        {...this.props}
      />
    );
  }
}
