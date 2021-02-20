import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.scss';

const NavigationItems = () => {
  const navItems = [
    {
      to: '/products',
      exact: true,
      text: 'Products'  
    },
    {
      to: '/ingredients',
      exact: true,
      text: 'Ingredients'  
    }
  ];

  return (
    <ul className={classes.NavigationItems}>
      { navItems.map(item => {
        return (
          <li>
            <NavigationItem {...item}/>
          </li>
        );
      }) }
    </ul>
  );
}

export default NavigationItems;
