import React from 'react';
import Item from './portfolio-item';

export default class Portfolio extends React.Component {
  render () {
    return (
      <div className="portfolio">
        <Item title={"Ziggurat"}
              liveUrl={"http://www.ziggurat.me"}
              githubUrl="http://github.com/josephwilliams/ziggurat"
              imageUrl="images/portfolio/ziggurat_item.png"
              description="a dynamic photo-sharing web app that allows users to comment, like, tag, and upload photos"
              codebase={['Ruby', 'Rails', 'React', 'Javascript', 'PostgreSQL', 'HTML', 'CSS']}
        />
      <Item title={"Soundlab"}
              liveUrl={"http://josephwilliams.github.io/soundlab"}
              githubUrl="http://github.com/josephwilliams/soundlab"
              imageUrl="images/portfolio/soundlab_item.png"
              description="a musical step sequencer built with Javascript and HTML5 WebAudioKit"
              codebase={['Javascript', 'JQuery', 'WebAudioKit', 'HTML5', 'CSS']}
        />
      <Item title={"Tetragon"}
              liveUrl={"http://josephwilliams.github.io/Tetragon"}
              githubUrl="http://github.com/josephwilliams/Tetragon"
              imageUrl="images/portfolio/tetragon_item.png"
              description="a two-player browser game based on Reversi/Othello"
              codebase={['React', 'Javascript', 'HTML', 'CSS']}
        />
      <Item title={"Minesweeper"}
              liveUrl={"http://josephwilliams.github.io/react_minesweeper"}
              githubUrl="http://github.com/josephwilliams/react_minesweeper"
              imageUrl="images/portfolio/minesweeper_item.png"
              description="classic Minesweeper built with React and Javascript"
              codebase={['React', 'Javascript', 'HTML', 'CSS']}
        />
      <Item title={"Active Record Lite"}
              githubUrl="http://github.com/josephwilliams/active_record_lite"
              imageUrl="images/portfolio/activerecord_item.png"
              description="a customized ORM based on Ruby on Rail's Active Record"
              codebase={['Ruby on Rails', 'Ruby', 'Active Record', 'SQL']}
        />
      <Item title={"Portfolio (beta)"}
              liveUrl={"http://josephwilliams.github.io/JW"}
              githubUrl="http://github.com/josephwilliams/JW"
              imageUrl="images/portfolio/portfolio0_item.png"
              description="first go at a personal portfolio site, built with React"
              codebase={['React', 'Javascript', 'HTML', 'CSS']}
        />
      </div>
    );
  }
}
