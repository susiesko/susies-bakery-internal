import React from 'react';

// This is just for containers and grid content!

const Grid = props => {
  const {isFluid, isForm} = props;
    
  const containerClasses = ['p-grid'];

  if (isFluid) containerClasses.push('p-fluid');
  if (isForm) containerClasses.push('p-formgrid');

  return (
    <div className={containerClasses.join(' ')} style={props.style}>
      {props.children}
    </div>
  );
}

export default Grid;
