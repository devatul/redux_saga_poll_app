import React from 'react';
import { Link } from 'react-router';
import buttonDanger from '../button/buttondanger';
import buttonSubmit from '../button/submit';
import inputTypeText from '../inputtype/text';
import label from '../label/label';
import heading from '../Heading/heading';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const userName = this.state.username;
    const passWord = this.state.password;
    this.setState({
      loginStatus: true,
    });
    if (userName.length > 2 && passWord.length > 2) {
      this.props.USER_LOGIN_REQUEST({ userName, passWord });
    }
  }

  render() {
    let buttonType = buttonSubmit({ name: 'Login', click: this.handleSubmit, className: 'btn btn-success disabled' });
    if (this.state.username.length > 2 && this.state.password.length > 2) {
      buttonType = buttonSubmit({ name: 'Login', click: this.handleSubmit, className: 'btn btn-success' });
    }
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">

          { heading({ value: 'LOGIN' })}

          {label({ htmlFor: 'username', text: 'User Name' })}

          {inputTypeText({ type: 'text',
            placeHolder: 'Enter UserName',
            onchange: (event) => {
              this.setState({
                username: event.target.value,
              });
            } })}

          {label({ htmlFor: 'password', text: 'Password' })}

          {inputTypeText({ type: 'password',
            placeHolder: 'Enter Password',
            onchange: (event) => {
              this.setState({
                password: event.target.value,
              });
            } })}

          {buttonType}

          <Link to="signup">
            {buttonDanger({ name: 'Signup' })}
          </Link>
          <br />


        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
