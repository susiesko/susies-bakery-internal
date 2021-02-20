import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import classes from './Toolbar.module.scss'

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <Logo/>
      <Navigation/>
    </div>
  );
}

export default Toolbar;
