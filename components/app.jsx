import React, {Component} from 'react';
import Scroll, {Link, Element} from 'react-scroll';
import Header from './header';
import Profile from './profile'

export default class App extends React.Component {

  render () {
    return (
      <div className="app-container">
        <Header />
        <div className="content">
          <Profile />
        </div>
      </div>
    );
  }
}
