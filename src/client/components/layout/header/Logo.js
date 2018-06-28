import Typography from '@material-ui/core/Typography';
import DoneAll from '@material-ui/icons/DoneAll';

import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <Typography variant="display1" component="h1" style={{ textAlign: 'center', overflowX: 'auto' }}>
        <DoneAll style={{ fontSize: 36 }} /> MineVergemål
      </Typography>
    );
  }
}

export default Logo;
