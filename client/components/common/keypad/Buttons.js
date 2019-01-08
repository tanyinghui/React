import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const Buttons = ({
    input,
    ... custom
}) => (
    <Button
        variant="contained"
        size="medium"
        {... input}
        {...custom}
    />

);

export default Buttons;