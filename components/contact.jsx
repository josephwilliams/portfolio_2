import React from 'react';

export default class Contact extends React.Component {
  constructor () {
    super();
    this.state = { name: "", email: "", body: "" };
  }

  updateValue (attribute) {
    return event => this.setState({ [attribute]: event.target.value });
  }

  render () {
    return (
      <div className="contact">
        <div className="contact-blurb">
          <div className="left">
            email me at <a href="mailto:me@josephwilliams.io">me@josephwilliams.io</a>
            or use the form below.
          </div>
          <div className="right">
            <i className="fa fa-map-signs fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <form action="https://formspree.io/me@josephwilliams.io"
              method="POST"
              className="contact-form">
          <input type="hidden" name="_next" value="#/thanks" />

          <input type="text" className="input" name="name"
                 value={this.state.name}
                 onChange={this.updateValue('name')}
                 placeholder="name"/>

          <input type="text" className="input" name="_replyto"
                 value={this.state.email}
                 onChange={this.updateValue('email')}
                 placeholder="email"
                 />

          <textarea className="input" name="body"
                 value={this.state.body}
                 onChange={this.updateValue('body')}
                 placeholder="message"
                 />

          <input type="submit"
                 value="submit"
                 className="submit"/>
        </form>
      </div>
    )
  }
}
