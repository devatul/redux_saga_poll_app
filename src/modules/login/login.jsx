import React from 'react';
import { Login } from '.././../components/login/login';

export class LoginContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.loginabc.loginStatus == true) {
      props.history.push(`dashboard/${props.loginabc}`);
    }
  }

  render() {
    return (
      <Login
        {...this.props}
      />
    );
  }
}
