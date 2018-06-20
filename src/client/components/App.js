import React, { Component } from 'react';
import CasesTable from './my-custodianship/CasesTable';
import ErrorBoundary from './utils/ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <CasesTable />
      </ErrorBoundary>);
  }
}
