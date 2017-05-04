import React from 'react';
import { Link } from 'react-router';
import ButtonDanger from '../button/buttondanger';
import ButtonSubmit from '../button/submit';
import InputTypeText from '../inputType/text';
import Label from '../label/label';
import Heading from '../heading/heading';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      role: '',
    };
  }
  render() {
    console.log(this.state);
    let buttonType = (<ButtonSubmit
      name="Signup" click={this.handleSubmit}
      className="btn btn-success disabled"
    />);
    if (this.state.username.length > 2 && this.state.password.length > 2) {
      buttonType = (<ButtonSubmit
        name="SignUp" click={this.handleSubmit}
        className="btn btn-success"
      />);
    }
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">

          <Heading head="Create a New Account" />

          <Label htmlFor="username" text="User Name" />

          <InputTypeText
            type="text" placeHolder="Enter UserName" onchange={(event) => {
              this.setState({
                username: event.target.value,
              });
            }}
          />


          <Label htmlFor="password" text="Password" />

          <InputTypeText
            type="password" placeHolder="Enter Password" onchange={(event) => {
              this.setState({
                password: event.target.value,
              });
            }}
          />


          <Label htmlFor="ReEnterPassword" text="Confirm Paasword" />

          <InputTypeText
            type="password" placeHolder="Re-Enter Password" onchange={(event) => {
              this.setState({
                confirm_password: event.target.value,
              });
            }}
          />
          <Label htmlFor="userRole" text="Role" />

          <select
            className="form-control" onChange={(event) => {
              this.setState({
                role: event.target.value,
              });
            }}
          >
            <option selected="selected" disabled="disabled">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>

          <br />
          {buttonType}

          <Link to="/">
            <ButtonDanger name="Go back to Login page" classes="btn btn-danger" />
          </Link>


        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
