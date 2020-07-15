import React from 'react';

export default class ProptimusPrime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          // src={self.props.img}
          className="App-logo"
          alt="logo"
          onClick={this.props.callForBetterHelp}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}