import React, { PropTypes } from 'react';
import './RsvpSubCard.css';

class RsvpSubCard extends React.Component {
  componentWillMount() {
    this.state = { activated: false, enteredCode: ''};
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(event) {
    this.setState({ enteredCode: event.target.value });
  }

  render() {
    const prompt = (
      <div>
        Please enter the secret code. <input type="password" onInput={this.updateCode} className="code-input" />
      </div>
    );
    const iFrame = <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScZcRoFR3FnOTHjQvs4SCdgQOigkLOWZ-NWJL4FWfaWEshwow/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" className="rsvp-frame">Loading...</iframe>;
    const satisfied = this.state.enteredCode === this.props.secretCode;
    const activeComponent = satisfied ? iFrame : prompt;
    return (
      <div>
        {activeComponent}
      </div>
    );
  }
}

RsvpSubCard.propTypes = {
  secretCode: PropTypes.string.isRequired,
}

export default RsvpSubCard;
