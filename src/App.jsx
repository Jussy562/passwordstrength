import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';

import '../src/pages/login/login.css'
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/dashboard'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authData, setAuthData] = useState({});
  
  const handleLogin = (data, e) => {
     // Retrieve stored form data from local storage
     const storedFormData = localStorage.getItem('formData');
    
     if (storedFormData) {
       // Parse the stored form data as an object
       const formData = JSON.parse(storedFormData);
       
       // Check if the entered credentials match the stored values
       if (data.name === formData.name && data.password === formData.password) {
         setIsLoggedIn(true);
         setAuthData(formData);
         console.log(isLoggedIn);
         
       }
       
     }
     
    e?.target.reset();
  };

 

  // const PrivateRoute = ({ children }) => {
    
      
  //     return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
      
  //   }
  // const PrivateRoute = ({ children }) => {
  //   const auth = authData;
    
  //   return auth?.name?  <>{children}</> : <Navigate to="/" replace={true} />;
    
  // };
 
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? (
      <React.Fragment>{children}</React.Fragment>
    ) : (
      <Navigate to="/" replace={true} />
    );
  };
  
    // console.log(isLoggedIn);
  return (
    <Router>
    <div className='app'>
      <Routes>
      
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          
          <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
          {/* <PrivateRoute path='/dashboard' component={Dashboard} isLoggedIn={isLoggedIn} /> */}
      </Routes>
    </div>
    </Router>
  )

}



export default App
