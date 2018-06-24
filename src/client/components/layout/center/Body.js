import { Switch, Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import CasesTable from './CasesTable';
import Case from './Case';
import MyProfile from './MyProfile';
import Documents from './Documents';
import NewsArchive from './NewsArchive';
import TasksArchive from './TasksArchive';

class Body extends Component {
  render() {
    switch (this.props.tabId) {
      case 0:
        return (
          <Switch>
            <Route path="/:fnr/:caseId">
              <Case />
            </Route>
            <Route>
              <CasesTable fnr="01015947159" />
              {/* 01015947159 - few
              04014136415 - many */}
            </Route>
          </Switch>
        );
      case 1:
        return (
          <MyProfile />
        );
      case 2:
        return (
          <Documents />
        );
      case 3:
        return (
          <NewsArchive />
        );
      case 4:
        return (
          <TasksArchive />
        );
      default:
        return (
          <div>
            {this.props.history.push('/')}
          </div>
        );
    }
  }
}

export default withRouter(Body);
