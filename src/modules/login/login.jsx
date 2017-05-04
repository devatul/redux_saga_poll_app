import React from 'react';
import { Login } from '.././../components/login/login';

export class LoginContainer extends React.Component {

  componentWillReceiveProps(props) {
    props.history.push('dashboard');
  }

  render() {
    return (
      <Login
        {...this.props}
      />
    );
  }
}
