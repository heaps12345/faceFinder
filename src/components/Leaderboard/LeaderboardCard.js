import React from 'react';
import Tilt from 'react-tilt';

const Card = ({ user }) => {
  return (
    <div className="leaderboard-card">
      <h2>{user.name.toUpperCase()}</h2>
      <img alt="profilepic" src={`https://robohash.org/${user.name}?size=150x150`} />
      <p>{'Entries: ' + user.entries}</p>
    </div>

    // <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{ margin: '10px 10px' }}>
    //   <main className="pa4 black-80">
    //     <div className="measure">
    //       <div className="f1 fw6 ph0 mh0">{user.name.toUpperCase()}</div>
    //       <br />

    //       <div className="center">
    //         <br />
    //         <div className="Tilt-inner pa3">
    //           <img alt="profilepic" src={`https://robohash.org/${user.name}?size=150x150`} />
    //         </div>

    //         <br />
    //       </div>

    //       <br />
    //       <div className="f3 fw6 ph0 mh0">{'Entries: ' + user.entries}</div>
    //     </div>
    //   </main>
    // </article>
  );
};

export default Card;
