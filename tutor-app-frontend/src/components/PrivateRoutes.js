import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Component that redirects user to the login page if not signed in
 */
const PrivateRoutes = ({ component: TheComponent, authStatus, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={props => (
      authStatus === false ?
        (<Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />) :
        (<TheComponent {...props} />)
    )}
  />
);

export default PrivateRoutes;
