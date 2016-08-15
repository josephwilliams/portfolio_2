import React from 'react';

export default class Profile extends React.Component {
  skills () {
    let skills = ['Ruby', 'Rails', 'Javascript', 'React', 'Flux', 'Redux',
                  'HTML', 'CSS', 'PostgreSQL', 'Git', 'JQuery', 'RSPEC', 'Nodal'];
    let skillItems = skills.map((skill, id) => {
      return (
        <div className="skill" key={id}>
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
        <div className="left">
          <div className="blurb">
            {this.skills()}
          </div>
        </div>
        <div className="right">


        </div>
      </div>
    )
  }
}
