import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
                        Todo
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                        Todo 1
          </Typography>
          <Typography component="p">
                        Todo 1 details goes here
          </Typography>
        </Paper>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                        Todo 2
          </Typography>
          <Typography component="p">
                        Todo 2 details goes here
          </Typography>
        </Paper>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                        Todo 3
          </Typography>
          <Typography component="p">
                        Todo 3 details goes here
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Todo);
