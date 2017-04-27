import React from 'react';
import { Login } from '.././../components/login/login';

export class LoginContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      error:''
    };
  }

  componentWillReceiveProps(props) {
    if (props.login.userLogin.isSuccess == true && props.login.userLogin.isSuccess == true ) {
        props.history.push('dashboard');
      }else if(props.login.userLogin.isError === true ){
        this.setState({ error : props.login.userLogin.errors.data });
    }
  }

  render() {
    return (
      <Login
        {...this.props}
        error={ this.state.error }
      />
    );
  }
}
