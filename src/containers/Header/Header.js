import React from 'react';

const Header = props => {
  return (
    <div className="Header p-shadow-3">
      <header>
        {props.children}    
      </header>
    </div>
  );
};

export default Header;
