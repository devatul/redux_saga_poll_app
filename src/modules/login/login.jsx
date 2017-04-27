import React from 'react';
import { Login } from '.././../components/login/login';

export class LoginContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.loginabc.userLogin.isSuccess == true && props.loginabc.userLogin.isSuccess == true ) {
        props.history.push('dashboard');
      }else if(props.loginabc.userLogin.isError == true && props.loginabc.userLogin.isSuccess == false ){
        props.history.push('/');
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
