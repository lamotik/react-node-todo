import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <Button
    raised={active}
    color="primary"
    onClick={(e) => {
        onClick();
      }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
