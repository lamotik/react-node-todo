import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Header from './layout/top/Header';
import News from './layout/left/News';
import Todo from './layout/right/Todo';


class App extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={2}>
          <News />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Todo />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(App);

/*
<Switch>

</Switch>
 */
