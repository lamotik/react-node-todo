import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Logo from './layout/header/Logo';
import UserMenu from './layout/header/UserMenu';
import UserBanner from './layout/header/UserBanner';

import News from './layout/left/News';
import Body from './layout/center/Body';
import Todo from './layout/right/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = { tabIndex: 0 };
  }

  changeTab(value) {
    this.setState({ tabIndex: value });
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid item xs={8}>
          <UserMenu tabIndex={this.state.tabIndex} changeTab={this.changeTab} />
        </Grid>
        <Grid item xs={2}>
          <UserBanner />
        </Grid>
        <Grid item sm={2}>
          <News />
        </Grid>
        <Grid item sm={8}>
          <Body tabIndex={this.state.tabIndex} />
        </Grid>
        <Grid item sm={2}>
          <Todo />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(App);
