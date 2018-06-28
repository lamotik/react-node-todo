import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
                        News
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                        News 1
          </Typography>
          <Typography component="p">
                        News 1 details goes here
          </Typography>
        </Paper>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                        News 2
          </Typography>
          <Typography component="p">
                        News 2 details goes here
          </Typography>
        </Paper>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                        News 3
          </Typography>
          <Typography component="p">
                        News 3 details goes here
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default News;
