import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cyan, pink, purple, orange} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {AddShoppingCart, ThumbUp, Assessment, Face} from '@material-ui/icons';


const Control = props => {

    const classes = props.classes;

    return (
      <div>
          <h2 style={{paddingBottom: '15px'}}>Control</h2>

      </div>
    )
};

Control.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Control
