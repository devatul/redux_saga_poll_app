import React from 'react';
import { Login } from './../component/login';

export class LoginContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.loginabc.loginStatus == true) {
      props.history.push(`dashboard/${props.loginabc}`);
    }
  }

  render() {
    return (
      <div>
        <Login
          {...this.props}
        />
      </div>
    );
  }
}
