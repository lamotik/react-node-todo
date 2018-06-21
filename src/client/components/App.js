import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CasesTable from './my-custodianship/CasesTable';
import Case from './my-custodianship/Case';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/:fnr/:caseId">
            <Case />
          </Route>
          <Route>
              <CasesTable fnr="01015947159" />
          </Route>
      </Switch>
    );
  }
}

export default withRouter(App);

/*
<Switch>

</Switch>
 */
