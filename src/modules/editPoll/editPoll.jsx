import React from 'react';

import EditPoll from '.././../components/editPoll/editPoll';

function EditPollContainer(props) {
  return (
    <EditPoll
      {...props}
    />
  );
}


export default EditPollContainer;

EditPollContainer.propTypes = {
  // DashboardContainer: React.PropTypes.func.isRequired,
};
