import React from 'react';

import logo from '../farkle.png';

export function Header(props: any) {
  return (
      <div className="header">
        <img src={logo} alt="Farkle Scorekeeper logo"/>
        <h1>Farkle Score Keeper</h1>
        <div className="actions">
          <button onClick={props.addPlayer}>Add Player</button>
          <button onClick={props.removePlayer}>Remove Player</button>
        </div>
      </div>
  );
}
