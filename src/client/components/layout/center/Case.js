import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';

class Case extends React.Component {
  render() {
    return (
      <div>
        <Paper elevation={4}>
          <Typography variant="headline" gutterBottom>
            Sak ID {this.props.match === null ? '' : this.props.match.params.caseId}
          </Typography>
        </Paper>
        <Link to="/"><Typography variant="headline" gutterBottom>Back</Typography></Link>
      </div>
    );
  }
}

export default withRouter(Case);
