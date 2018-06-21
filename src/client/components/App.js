import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CasesTable from './my-custodianship/CasesTable';
import Case from './my-custodianship/Case';

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Route path="/cases">
            <CasesTable fnr="01015947159" />
          </Route>
          <Route path="/:fnr/:caseId">
            <Case />
          </Route>
        </div>
      </Switch>
    );
  }
}

export default withRouter(App);

/*
<Switch>

</Switch>
 */
