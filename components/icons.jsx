import React from 'react';

export default class Icons extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="icons">
        <a href="http://github.com/josephwilliams">
          <div className="icon">
            <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
              <div className="url">
                github
              </div>
          </div>
        </a>

        <a href="http://linkedin.com/in/jwilli12">
          <div className="icon">
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              <div className="url">
                linkedin
              </div>
          </div>
        </a>

        <a href="https://angel.co/joseph-williams-8">
          <div className="icon">
            <i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
              <div className="url">
                angelList
              </div>
          </div>
        </a>
      </div>
    )
  }
}
