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
  const {
    user,
    isAuthenticated,
    isLoading,
    logout
  } = useAuth0();

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
      console.log('Logout');
      return logout({ logoutParams: {returnTo: window.location.origin} });

    } 
  };
  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div className='max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4'>
      <div className='flex justify-center my-6'>
        <div className='w-24 h-24 rounded-full overflow-hidden border-white shadow-lg'>
          <img 
          className="w-full h-full object-cover"
          src={user.picture} 
          alt="profile picture" />
        </div>
      </div>
      <h2 className='text-3xl font-bold'>{user.name}</h2>
      <p className='p-4 text-gray-600/85'>{user.email}</p>
      <button onClick={handleLogging} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
      </div>
  );
};

export default Profile;
