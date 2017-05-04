import React from 'react';

import Dashboard from '.././../components/dashboard/dashboard';

function DashboardContainer(props) {
  return (
    <Dashboard
      {...props}
    />
  );
}

export default DashboardContainer;

DashboardContainer.propTypes = {
  // DashboardContainer: React.PropTypes.func.isRequired,
};
