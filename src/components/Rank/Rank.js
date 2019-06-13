import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="rank">
      <p className="rank__text">{`${name}, your current entry count is...`}</p>
      <p className="rank__number">{entries}</p>
    </div>
  );
};

export default Rank;
