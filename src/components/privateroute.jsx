import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust the path as needed

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Use your authentication logic

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
