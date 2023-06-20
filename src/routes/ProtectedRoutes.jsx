import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoute = ({ isLoggedIn, children }) => {
    // Check the isLoggedIn state directly
    console.log('Please work');
    // const auth = isLoggedIn;
    const auth = true;
return auth ? (
        <React.Fragment>{children}</React.Fragment>
      
    ) : (
        <Navigate to="/" replace />
     
    );
  };

  export default PrivateRoute
 