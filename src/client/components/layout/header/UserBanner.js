import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExitToApp from '@material-ui/icons/ExitToApp';

import React from 'react';

class UserBanner extends React.Component {
  render() {
    return (
      <Typography variant="display2" component="h1" style={{ textAlign: 'right' }}>
        <IconButton>
          <Avatar>JJ</Avatar>
        </IconButton>
        <IconButton><ExitToApp style={{ fontSize: 36 }} /></IconButton>
      </Typography>
    );
  }
}

export default UserBanner;
