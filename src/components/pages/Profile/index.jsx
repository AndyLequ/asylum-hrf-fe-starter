/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */

import { useAuth0 } from '@auth0/auth0-react'


const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const isLoading = false;
  const user = true;
  const username = ""

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div>
      <img src="" alt="" />
      Profile Page
      {username}
      <button>Logout</button>
      </div>
  );
};

export default Profile;
