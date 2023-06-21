import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ isLoggedIn, children }) => {
    
    const auth = isLoggedIn;
    
return auth ? (
        <React.Fragment>{children}</React.Fragment>
      
    ) : (
        <Navigate to="/" replace />
     
    );
  };

  export default PrivateRoute
 