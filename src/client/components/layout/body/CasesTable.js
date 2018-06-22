// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CircularProgress from '@material-ui/core/CircularProgress';
import 'react-virtualized/styles.css';
import React, { Component } from 'react';

class CasesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cases: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/custodianCases/${this.props.fnr}`)
      .then(res => res.json())
      .then(data => this.setState({ cases: data.cases }));
  }

  handleClick(event, id) {
    console.log(`Going to /${this.props.fnr}/${id}`);
    this.props.history.push(`/${this.props.fnr}/${id}`);
  }

  render() {
    return (
      <div>
        {this.state.cases ? (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sak ID</TableCell>
                  <TableCell numeric>Fornavn</TableCell>
                  <TableCell numeric>Mellomnavn</TableCell>
                  <TableCell numeric>Etternavn</TableCell>
                  <TableCell numeric>F/DNR</TableCell>
                  <TableCell numeric>DUF</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.cases.map(n => (
                  <TableRow key={n.saksId} onClick={event => this.handleClick(event, n.saksId)}>
                    <TableCell component="th" scope="row" numeric>{n.saksId}</TableCell>
                    <TableCell>{n.fornavn}</TableCell>
                    <TableCell>{n.mellomnavn}</TableCell>
                    <TableCell>{n.etternavn}</TableCell>
                    <TableCell>{n.fodselsnr}</TableCell>
                    <TableCell>{n.dufNr}</TableCell>
                  </TableRow>
                                    ))}
              </TableBody>
            </Table>
          </Paper>
                ) : (
                  <CircularProgress />
                )}
      </div>
    );
  }
}


export default withRouter(CasesTable);
