import React from 'react';
import ViewPolls from './viewPolls';

const _ = require('lodash');

export default class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: props.polling.polling.data.data,
      submitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.polling.polling.data.data !== undefined) {
      this.setState({
        response: props.polling.polling.data.data,
      });
      if (!props.polling.submitPoll.data.isLoading) {
        this.props.dataPollingRequest();
        this.setState({
          submitted: true,
        });
      }
    }
  }

  handleSubmit(selectedData) {
    this.props.submitPollRequest({ selectedData });
  }
  handleDelete(id) {
    this.props.deletePollRequest({ id });
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          {_.map(this.state.response, (poll, index) =>
            <ViewPolls
              key={index} data={poll} queNo={index + 1}
              handleSubmit={this.handleSubmit}
              handleDelete={this.handleDelete}
            />)}
        </div>
      </div>
    );
  }
}

TableRow.propTypes = {
  polling: React.PropTypes.isRequired,
  submitPollRequest: React.PropTypes.func.isRequired,
  dataPollingRequest: React.PropTypes.func.isRequired,
  deletePollRequest: React.PropTypes.func.isRequired,
};
