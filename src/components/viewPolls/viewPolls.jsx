import React from 'react';
import ButtonDanger from '../button/buttondanger';
import ButtonSubmit from '../button/submit';
import RadioButton from '../inputType/radioButton';
import Label from '../label/label';
import Heading from '../heading/heading';

export default class ViewPolls extends React.Component {

  render() {
    const PollName = `POll=>${this.props.data.title}`;
    return (
      <div className="col-md-12" style={{ fontSize: 15 }}>
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="jumbotron">
            <div>
              <Heading head={PollName} />
            </div>
            {this.props.data.options.map((option, index) =>
              <div key={index}>
                <Label htmlFor="poll" text="Option" no={index + 1} />
                <RadioButton radioButton={option.option} />{name}
              </div>)}
            <div>
              <Label htmlFor="poll" text="Your Opinion" no="" />
            </div>
            <div><br />
              <ButtonSubmit
                name="Login"
                className="btn btn-success"
              />
              <ButtonDanger name="EDit" />
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}
