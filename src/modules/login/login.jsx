import React from 'react';
import { Login } from '.././../components/login/login';

export class LoginContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.login.userLogin.isSuccess == true && props.login.userLogin.isSuccess == true ) {
        props.history.push('dashboard');
      }
  }

  render() {
    return (
      <Login
        {...this.props}
        error={ this.props.login.userLogin.errors.data }
      />
    );
  }
}
