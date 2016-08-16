import React from 'react';

export default class PortFolioItem extends React.Component {
  constructor (props) {
    super(props);
  }

  tasks () {
    let list;
    list = this.props.tasks.map((duty, id) => {
      return (
        <li key={id}>{duty}</li>
      )
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }

  render () {
    return (
      <div className="row">
        <div className="img">
          <img src={this.props.imgUrl}
               style={{width:50}}></img>
        </div>
        <div className="text">
          <div className="top">
            <div className="name">
              {this.props.name} &nbsp;&nbsp;
              <div className="title">
                {this.props.title}
              </div>
            </div>
            <div className="other-info">
              {this.props.time} &nbsp;&nbsp;
              <div className="location">
                {this.props.location}
              </div>
            </div>
            <div className="bottom">
              {this.tasks()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
