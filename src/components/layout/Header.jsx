import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, Link } from 'react-router-dom'

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  // TODO: Replace me
  const { isAuthenticated } = useAuth0();
  return (
    <header className='flex flex-col w-full primary-c px-14'>
      {/* top row */}
      <div className='flex justify-between w-full items-center'>
        <div className='flex justify-between'>
          <NavLink to='https://www.humanrightsfirst.org/'>
            <img className='w-[100px]' src={Logo} alt='HRF logo white' />
          </NavLink>
        </div>
        <div className='flex items-center py-4 gap-16'>
          <NavLink to='/' className='nav-btn'>
            Home
          </NavLink>
          <NavLink to='/graphs' className='nav-btn'>
            Graphs
          </NavLink>
          {isAuthenticated && (
            <NavLink to='/profile' className='nav-btn'>
              Profile
            </NavLink>
          )}
          <LoggingButtons/>
        </div>

      </div>

      {/* new row */}
      { isLandingPage && (
        <div className='w-full py-4 mt-4 text-white'>
          <h1 className='text-4xl text-center'>
            Asylum Office Grant Rate Tracker
          </h1>
          <p> The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public and interactive tool to explore USCIS data on Asylum Office decisions</p>
        </div>
        )
      }
    </header>
  );
}
