import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Panels from './panels';

export default class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="app-container">
          <Panels />
          <Sidebar />
        <div className="content">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}
