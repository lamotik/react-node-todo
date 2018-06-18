import SnackbarContent from '@material-ui/core/SnackbarContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const greeting = `Logged in user :  ${this.state.username}`;
    return (
      <div>
        {this.state.username ? (
          <h1>
            <SnackbarContent message={`${greeting}`} />
          </h1>
                ) : (
                  <CircularProgress />
                )}
      </div>
    );
  }
}
