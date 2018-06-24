import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { orderBy } from 'lodash';

import Paper from '@material-ui/core/Paper';

import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';

class CasesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: null,
      order: 'asc',
      orderBy: 'fodselsnr',
      columnData: [
        {
          id: 'saksId',
          numeric: true,
          disablePadding: true,
          label: 'Sak ID'
        },
        {
          id: 'fornavn',
          numeric: false,
          disablePadding: false,
          label: 'Fornavn'
        },
        {
          id: 'mellomnavn',
          numeric: false,
          disablePadding: false,
          label: 'Mellomnavn'
        },
        {
          id: 'etternavn',
          numeric: false,
          disablePadding: false,
          label: 'Etternavn'
        },
        {
          id: 'fodselsnr',
          numeric: false,
          disablePadding: false,
          label: 'F/DNR'
        },
        {
          id: 'dufNr',
          numeric: false,
          disablePadding: false,
          label: 'DUF'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestSort = this.handleRequestSort.bind(this);
  }

  componentDidMount() {
    fetch(`/api/custodianCases/${this.props.fnr}`)
      .then(res => res.json())
      .then(data => this.setState({ cases: data.cases }));
  }

  handleClick(event, id) {
    // console.log(`Going to /${this.props.fnr}/${id}`);
    this.props.history.push(`/${this.props.fnr}/${id}`);
  }

  handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({
      order,
      orderBy
    });
  }

  render() {
    return (
      <div>
        <Paper style={{ overflowX: 'auto' }}>
          {this.state.cases ? (
            <Table>
              <TableHead>
                <TableRow>
                  {this.state.columnData.map(column => (
                    <TableCell
                      key={column.id}
                      numeric={column.numeric}
                      sortDirection={this.state.orderBy === column.id ? this.state.order : 'asc'}
                    >
                      <TableSortLabel
                        active={this.state.orderBy === column.id}
                        direction={this.state.order}
                        onClick={event => this.handleRequestSort(event, column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    </TableCell>
                  ), this)}
                </TableRow>
              </TableHead>

              <TableBody>
                {console.log(`Sorting: order: ${this.state.order}, orderBy: ${this.state.orderBy}`)}
                {orderBy(this.state.cases, this.state.orderBy, this.state.order)
                  .map(n => (
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
          ) : (
            <CircularProgress />
          )}
        </Paper>
      </div>
    );
  }
}

export default withRouter(CasesTable);
