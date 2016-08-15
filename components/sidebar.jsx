import React from 'react';
import Icons from './icons';

class Sidebar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { active: "" };
  }

  componentDidMount () {
    let location = window.location.hash;
    let current;
    
    if (location.includes('portfolio')) {
      current = 'portfolio';
    } else if (location.includes('resume')) {
      current = 'resume';
    } else if (location.includes('contact')) {
      current = 'contact';
    }

    this.setState({ active: current });
  }

  linkTo (address) {
    return () => {
      this.setState({ active: address });
      this.context.router.push(address);
    };
  }

  links () {
    let links;
    links = ['portfolio', 'resume', 'contact'].map((link, id) => {
      if (this.state.active === link) {
        return (
          <div className="link-active" key={id}>
            {link}
          </div>
        );
      } else {
        return (
          <div className="link"
               onClick={this.linkTo(link)}
               key={id}>
            {link}
          </div>
        );
      }
    });

    return (
      <div className="links">
        {links}
      </div>
    );
  }

  render () {
    return (
      <div className="sidebar">
        {this.links()}
        <Icons />
      </div>
    );
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Sidebar;
