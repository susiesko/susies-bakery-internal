import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss'

const NavigationItem = ({to, exact, text}) => {
  return (
    <NavLink 
      to={to} 
      exact={exact}
      className={classes.NavigationItem}
      activeClassName={classes.Active}
    >
      {text}
    </NavLink>
  );
}

export default NavigationItem;
