import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const styles = {
  root: {
    textAlign: 'center'
  },
  card: {
    paddingTop: 40
  }
};

const App = props => (
  <div className={props.classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Todo
        </Typography>
      </Toolbar>
    </AppBar>
    <Card className={props.classes.card}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Card>
  </div>
);

App.propTypes = {
  classes: PropTypes.shape.isRequired
};

export default withStyles(styles)(App);
