import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import '../src/pages/dashboard/dashboard.css'
import '../src/pages/login/login.css'
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/dashboard'
import PrivateRoute from './routes/ProtectedRoutes';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authData, setAuthData] = useState(null);

  const handleLogin = (data) => {
    // Retrieve stored form data from local storage
    const storedFormDataArray = localStorage.getItem('formData');

    if (storedFormDataArray) {
      // Parse the stored form data as an object
      const passwordList = JSON.parse(storedFormDataArray);


      console.log('FORMDATA:', formData);
      // Check if the entered credentials match the stored values

      const user = passwordList.find(
        (userData) => userData.name === data.name && userData.password === data.password
      );
      if (user) {
        setAuthData(user);
        setIsLoggedIn(true);
        localStorage.setItem('logginDetails', JSON.stringify(user));
      } else {
        alert('Incorrect name or password. Try again!');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthData(null);
  }

  useEffect(() => {
    console.log('auth:', authData);
    console.log('isLoggedIn:', isLoggedIn);
  }, [authData, isLoggedIn]);
 
  // useEffect(() => {
  //   console.log('auth:', authData);
  //   if(authData) {
  //     setIsLoggedIn(true);
  //   }
  //   console.log('isLoggedIn:', isLoggedIn);
    
  // }, [handleLogin]);

  
 

  
    // console.log(isLoggedIn);
  return (
    <Router>
    <div className="app h-full">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin}  />} />
         
          <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn} ><Dashboard onLogout={handleLogout} /></PrivateRoute>} />
           
           
        </Routes>
      </div>
    </Router>
  )

}



export default App
