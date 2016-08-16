import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Panels from './panels';

export default class App extends React.Component {
  render () {
    return (
      <div className="app-container">
        <div className="side-content">
          <Panels />
          <Sidebar />
        </div>
        <div className="content">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}
