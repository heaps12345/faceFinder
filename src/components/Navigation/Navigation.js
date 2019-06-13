import React from 'react';
import Tilt from 'react-tilt';
import brain from '../Logo/brain.png';
import '../Logo/Logo.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  // <nav className="navigation">
  //   <div className="navigatino__logo">
  //     <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
  //   </div>
  //   <ul className="navigation__list">
  //     <li className="navigation__list-item">Sign In</li>
  //   </ul>
  // </nav>

  if (isSignedIn) {
    return (
      <nav className="navigation">
        <div className="navigation__logo">
          <img class="logo-img" alt="logo" src={brain} />
        </div>
        <p onClick={() => onRouteChange('home')} className="navigation__link">
          Home
        </p>
        <p onClick={() => onRouteChange('leaderboard')} className="navigation__link">
          Leaderboard
        </p>
        <p onClick={() => onRouteChange('profile')} className="navigation__link">
          Profile
        </p>
        <p onClick={() => onRouteChange('signout')} className="navigation__link">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('signin')} className="f3 dim link pa3 pointer patuaone">
          Sign In
        </p>
        <p onClick={() => onRouteChange('register')} className="f3 dim link pa3 pointer patuaone">
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
