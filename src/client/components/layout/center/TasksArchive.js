import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React from 'react';

class TasksArchive extends React.Component {
  render() {
    return (
      <div>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
              Oppgavearkiv
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default TasksArchive;
