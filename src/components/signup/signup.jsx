import React from 'react';
import { Link } from 'react-router';
import buttonDanger from '../button/buttondanger';
import buttonSubmit from '../button/submit';
import inputTypeText from '../inputtype/text';
import label from '../label/label';
import heading from '../Heading/heading';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
    };
  }
  render() {
    let buttonType = buttonSubmit({ name: 'Signup', click: this.handleSubmit, className: 'btn btn-success disabled' });
    if (this.state.username.length > 2 && this.state.password.length > 2) {
      buttonType = buttonSubmit({ name: 'Signup', click: this.handleSubmit, className: 'btn btn-success' });
    }
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">
          { heading({ value: 'Create New Account' })}

          <form>
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
            {label({ htmlFor: 'Confirmpassword', text: 'Confirm Password' })}

            {inputTypeText({ type: 'password',
              placeHolder: 'Re-Enter Password',
              onchange: (event) => {
                this.setState({
                  confirm_password: event.target.value,
                });
              } })}

            {buttonType}

            <Link to="/">
              {buttonDanger({ name: 'Go back to Login page' })}
            </Link>
            <br /><br />

          </form>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
