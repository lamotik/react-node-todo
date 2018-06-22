import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';

class Documents extends Component {
  render() {
    return (
      <div>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
              Schemaer
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Documents;
