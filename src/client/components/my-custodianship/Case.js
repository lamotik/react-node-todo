import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class Case extends Component {
  render() {
    let message = 'Sak ID';
    if (this.props.match !== null) {
      message += `: ${this.props.match.params.caseId}`;
    }
    return (
      <div>
        <h3>{message}</h3>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default withRouter(Case);
