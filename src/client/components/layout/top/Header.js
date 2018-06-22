import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import Body from '../body/Body';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Tabs value={value} onChange={this.handleClick}>
              <Tab label="Mine Vergemål" />
              <Tab label="Min Profil" />
              <Tab label="Skjemaer" />
              <Tab label="Nyhetsarkiv" />
              <Tab label="Oppgavearkiv" />
            </Tabs>
          </Toolbar>
        </AppBar>
        {/* <AppBar position="static"> */}

        {/* </AppBar> */}
        <Body tabId={value} />
        {/* {value === 0 && <Body />}
        {value === 1 && 'Item Two'}
        {value === 2 && 'Item Three'}
        {value === 3 && 'Item Four'}
        {value === 4 && 'Item Five'} */}
      </div>
    );
  }
}

export default Header;

// export default withRouter(Case);
