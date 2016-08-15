import React from 'react';
import Icons from './icons';

class Sidebar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { active: "profile" };
  }

  linkTo (address) {
    return () => {this.context.router.push(address)};
  }

  render () {
    return (
      <div className="sidebar">
        <div className="links">
          <div className="link-note" onClick={this.linkTo('profile')}>
            profile
          </div>
          <div className="link-note" onClick={this.linkTo('portfolio')}>
            projects
          </div>
          <div className="link-note" onClick={this.linkTo('resume')}>
            resume
          </div>
          <div className="link-note" onClick={this.linkTo('contact')}>
            contact
          </div>
          <div className="link-note">
            blog
          </div>
        </div>
        <Icons />
      </div>
    );
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Sidebar;
