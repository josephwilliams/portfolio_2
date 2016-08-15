import React from 'react';

export default class Contact extends React.Component {
  constructor () {
    super();
    this.state = { name: "", email: "", body: "" };
  }

  updateValue (attribute) {
    return event => this.setState({ [attribute]: Number(event.target.value) });
  }

  render () {
    return (
      <div className="contact">
        <form action="https://formspree.io/me@josephwilliams.io"
                          method="POST">
          <input type="hidden" name="_next" value="#/thanks" />

           <div className="form-field">
            <input type="text" className="input" name="name"
                   value={this.state.name}
                   onChange={this.updateValue('name')}
                   placeholder="name"/>
           </div>

           <div className="form-field">
            <input type="text" className="input" name="_replyto"
                   value={this.state.email}
                   onChange={this.updateValue('email')}
                   placeholder="email"
                   />
           </div>

           <div className="form-field">
            <textarea className="input" name="body"
                   value={this.state.body}
                   onChange={this.updateValue('body')}
                   placeholder="message"
                   />
           </div>

           <div className="form-field">
            <input type="submit"
                   value="submit"
                   className="submit"/>
           </div>
        </form>
      </div>
    )
  }
}
