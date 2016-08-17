import React from 'react';
import Item from './resume-item';

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
          Hello World! My name is <div className="red">Joseph</div> and I'm a web developer with a passion for <div className="red">front-end</div> design.
          I currently reside in <div className="red">San Francisco</div>, California and am seeking full time employment.
        </div>
        {this.skills()}
        <div className="row-header">
          EXPERIENCE
        </div>
        <Item name={"App Academy"}
              title={"Apprentice Software Engineer & Teaching Assistant"}
              location={"San Francisco, California"}
              time={"June - August, 2016"}
              imgUrl={"images/resume/aa.png"}
              tasks={['Conducted 100+ pair-programming technical interviews for admission into software engineering school in Ruby, Javascript, Python, C, and Java',
                      'Ammended curriculum to include articles on Ruby class interaction, object-oriented programming, and developing simple terminal games in Ruby',
                      'Tutored beginner-level coders on topics including string and array manipulation, recursion, object-oriented programming, and best practices to the point of entry into a top-level coding bootcamp'
                    ]}
        />
        <Item name={"USAHEC"}
              title={"Research Historian"}
              location={"Carlisle, Pennsylvania"}
              time={"August 2014 - September 2015"}
              imgUrl={"images/resume/usahec.jpg"}
              tasks={["Reported on past US military and government responses to pandemic outbreaks in the wake of the 2014-2015 Ebola crisis in Africa to support US containment efforts abroad",
                      "Composed a historical overview of past US Army Chief of Staff transitions and presented findings to the incoming Chief of Staff’s action officers to support Pentagon operations"
                    ]}
        />
        <div className="row-header">
          EDUCATION
        </div>
        <Item name={"App Academy"}
              title={null}
              location={"San Francisco, California"}
              time={"March - June, 2016"}
              imgUrl={"images/resume/aa.png"}
              tasks={['1000+ hour software engineering and web development bootcamp, <3% acceptance rate',
                      'Immersive, full-time, full-stack course focusing on Ruby, Rails, Javascript, React.js, Flux, SQL, jQuery, OOP, TTD, pair programming, algorithms, and best programming practices'
                    ]}
        />
        <Item name={"Institute Barcelona d'Estudis Internacionals"}
              title={"Master's, International Relations"}
              location={"Barcelona, Spain"}
              time={"August 2013 - June 2014"}
              imgUrl={"images/resume/ibei.png"}
              tasks={['Studied International Relations, focusing on international political systems, schools of thought within international relations, global economics, and security studies',
                      'My thesis dealt with the nuances of social capital development in relation to Internet use, particularly among immigrant communities, given that Internet utilization has become culturally ubiquitous'
                      ]}
        />
        <Item name={"University of Maryland"}
              title={"Bachelor's, History, Honors"}
              location={"College Park, Maryland"}
              time={"August 2009 - June 2013"}
              imgUrl={"images/resume/umd.jpg"}
              tasks={['Studied cultural histories, e.g. of American since the Revolutionary Period, the Ancient Mediterranean World, World Wars, and social issues']}
        />
      </div>
    )
  }
}
