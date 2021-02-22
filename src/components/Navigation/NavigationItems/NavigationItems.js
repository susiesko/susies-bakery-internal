import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.scss';

const NavigationItems = () => {
  const navItems = [
    {
      to: '/recipes',
      exact: true,
      text: 'Recipes'  
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
          <li key={Math.random() * 100}>
            <NavigationItem {...item}/>
          </li>
        );
      }) }
    </ul>
  );
}

export default NavigationItems;
