import React from 'react';
import Login from '.././../components/login/login';

export default class LoginContainer extends React.Component {

  componentWillReceiveProps(props) {
    if (props.login.userLogin.isSuccess === true) {
      this.props.history.push('dashboard');
    }
  }

  render() {
    return (
      <Login
        {...this.props}
        error={this.props.login.userLogin.errors.data}
      />
    );
  }
}

LoginContainer.propTypes = {
  login: React.PropTypes.isRequired,
  history: React.PropTypes.isRequired,
};
