import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, value) {
    this.props.changeTab(value);
  }

  render() {
    return (
      <Tabs
        value={this.props.tabIndex}
        onChange={this.handleClick}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Mine Vergemål" />
        <Tab label="Min Profil" />
        <Tab label="Skjemaer" />
        <Tab label="Nyhetsarkiv" />
        <Tab label="Oppgavearkiv" />
      </Tabs>
    );
  }
}

export default UserMenu;

// export default withRouter(Case);
