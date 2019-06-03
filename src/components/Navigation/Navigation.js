import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('home')} className="f3 dim link pa3 pointer patuaone">
          Home
        </p>
        <p onClick={() => onRouteChange('leaderboard')} className="f3 dim link pa3 pointer patuaone">
          Leaderboard
        </p>
        <p onClick={() => onRouteChange('profile')} className="f3 dim link pa3 pointer patuaone">
          Profile
        </p>
        <p onClick={() => onRouteChange('signout')} className="f3 dim link pa3 pointer patuaone">
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
