import React from 'react';

export default class Resume extends React.Component {
  skills () {
    let skills = ['Ruby', 'Rails', 'Javascript', 'React', 'Flux', 'Redux',
                  'HTML', 'CSS', 'PostgreSQL', 'Nodal', 'Git', 'JQuery', 'RSPEC', 'Nodal'];
    let skillItems = skills.map((skill, id) => {
      return (
        <div className="skill" key={id}>
          {skill}
        </div>
      );
    });

    return (
      <div className="skills-container">
        <div className="skills">
          {skillItems.slice(0, skillItems.length / 2)}
        </div>
        <div className="skills">
          {skillItems.slice(skillItems.length / 2)}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="resume">
        <div className="blurb">
          Hi! I'm Joseph and I'm a front-end web developer living in San Francisco.
          I'm currently seeking full time employment.
        </div>
        {this.skills()}
      </div>
    )
  }
}
