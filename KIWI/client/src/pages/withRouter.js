import React from 'react';
import { useParams } from 'react-router-dom';
 // High order component
const withRouter = WrappedComponent => props => {
  const params = useParams();
 
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};
 
export default withRouter;