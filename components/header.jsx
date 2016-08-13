import React from 'react';

export default class Header extends React.Component {
  constructor () {
    super();
    this.state = { headerClass: "header" };
  }

  componentDidMount () {
    var that = this;
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 1;
        if (distanceY > shrinkOn) {
            that.setState({ headerClass: "header-scroll"});
        } else {
            that.setState({ headerClass: "header"});
        }
    });
  }

  render () {
    return (
      <div className={this.state.headerClass}>

      </div>
    );
  }


}
