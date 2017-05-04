import React from 'react';

import AddPoll from '.././../components/addPoll/addPoll';

function AddPollContainer(props) {
  return (
    <AddPoll
      {...props}
    />
  );
}

export default AddPollContainer;

AddPollContainer.propTypes = {
  // DashboardContainer: React.PropTypes.func.isRequired,
};
