import React from 'react';

export default class Icons extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="icons">
        <a href="github.com/josephwilliams">
          <div className="icon">
            <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
              <div className="url">
                github.com/
                josephwilliams
              </div>
          </div>
        </a>

        <a href="linkedin.com/in/jwilli12">
          <div className="icon">
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              <div className="url">
                linkedin.com/in/
                jwilli12
              </div>
          </div>
        </a>

        <a href="https://angel.co/joseph-williams-8">
          <div className="icon">
            <i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
              <div className="url">
                angel.co/joseph-
                williams-8
              </div>
          </div>
        </a>
      </div>
    )
  }
}
