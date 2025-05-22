/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
import { useAuth0 } from '@auth0/auth0-react';
import React, {useState} from 'react';



export const LoggingButtons = () => {
  // TODO: Replace these with Auth0 functionality
  
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
      console.log('Logout');
      return logout({ logoutParams: {returnTo: window.location.origin} });

    } else {
      // TODO: Add Redirect functionality here:
      console.log('Login');
      return loginWithRedirect();
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};