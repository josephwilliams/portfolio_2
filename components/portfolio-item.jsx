import React from 'react';

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { infoClass: "info-hidden" };
  }

  showInfo () {
    this.setState ({ infoClass: "info-show" });
  }

  codebase () {
    let codebase;
    codebase = this.props.codebase.map((code, id) => {
      return (
        <div className="skill" key={id}>
          {code}
        </div>
      );
    });

    return (
      <div className="skills">
        {codebase}
      </div>
    )
  }

  render () {
    return (
    <div className="portfolio-item">
      <div className="image">
        <img src={this.props.imageUrl}></img>

        <div className={this.state.infoClass}>
          <div className="title">
            {this.props.tile}
          </div>
          <div className="links">
            <a href={this.props.githubUrl}>github</a>
            <a href={this.props.liveUrl}>live</a>
          </div>
          <div className="description">
            {this.props.description}
          </div>
          <div className="codebase">
            {this.codebase()}
          </div>
        </div>

      </div>
    </div>
    );
  }
}
