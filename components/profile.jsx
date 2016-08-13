import React from 'react';

export default class Profile extends React.Component {
  skills () {
    let skills = ['Ruby', 'Rails', 'Javascript', 'React', 'Flux', 'Redux',
                  'HTML', 'CSS', 'PostgreSQL', 'Git', 'JQuery', 'RSPEC', 'Nodal'];
    let skillItems = skills.map(skill => {
      return (
        <div className="skill">
          {skill}
        </div>
      );
    });

    return (
      <div className="skills">
        {skillItems}
      </div>
    )
  }

  render () {
    return (
      <div className="profile">
        <div className="content">
          <div className="left">
            <div className="blurb">
              Hi! Im Joseph Williams.  Im a front end web developer.
            </div>
          </div>
          <div className="right">
            {this.skills()}
          </div>
        </div>
      </div>
    )
  }
}
