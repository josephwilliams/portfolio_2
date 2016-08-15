import React from 'react';
import LastTrack from './last_track';
import Panels from './panels';

export default class Header extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="header">
        <div className="bg-grey-square"/>
        <h1>Joseph Williams</h1>
        <h2>web developer</h2>
        <LastTrack />
      </div>
    );
  }
}
