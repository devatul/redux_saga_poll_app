import React from 'react';
import ButtonSubmit from '../button/submit';
import InputTypeText from '../inputType/text';
import Label from '../label/label';
import Heading from '../heading/heading';


export default class EditPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      options: '',
      role: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const options = this.state.options;
    const role = this.state.role;
    if (title.length > 2 && options.length > 2 && role.length > 2) {
      // this.props.userLoginRequest({ userName, passWord });

    }
  }

  render() {
    let buttonType = (<ButtonSubmit
      name="Update" click={this.handleSubmit}
      className="btn btn-success disabled"
    />);
    if (this.state.title.length > 2) {
      buttonType = (<ButtonSubmit
        name="Update" click={this.handleSubmit}
        className="btn btn-success"
      />);
    }
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">

          <Heading head="Edit Poll" />
          <Label htmlfor="error" text={''} /> <br />
          <Label htmlfor="EDit" text="Edit Title" />

          <InputTypeText
            type="text" placeHolder="Title" onchange={(event) => {
              this.setState({
                title: event.target.value,
              });
            }}
          />


          <Label htmlfor="Option" text="Option" />

          {buttonType}

        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
EditPoll.propTypes = {
  // userLoginRequest: React.PropTypes.func.isRequired,
  // error: React.PropTypes.string.isRequired,
};
