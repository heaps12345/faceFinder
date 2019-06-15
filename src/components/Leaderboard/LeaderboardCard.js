import React from 'react';
import Tilt from 'react-tilt';

const Card = ({ user }) => {
  return (
    <div className="leaderboard-card">
      <h2>{user.name.toUpperCase()}</h2>
      <img alt="profilepic" src={`https://robohash.org/${user.name}?size=150x150`} />
      <p>{'Entries: ' + user.entries}</p>
    </div>

    
  );
};

export default Card;
