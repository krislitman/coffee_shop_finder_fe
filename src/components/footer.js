import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
            <React.Fragment>
              <h2 onClick={this.props.alert}>
                This is a footer
              </h2>
              <h4>{this.props.message}</h4>
            </React.Fragment>
    )
  }
}

export default Footer;
