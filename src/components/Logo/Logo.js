import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = ({ onRouteChange }) => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }}>
        <div className="Tilt-inner logo">
          <img class="logo-img" alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
