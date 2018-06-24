import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';

class MyProfile extends Component {
  render() {
    return (
      <div>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
                    MyProfile
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default MyProfile;
