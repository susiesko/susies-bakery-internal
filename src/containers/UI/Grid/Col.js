import React from 'react';

// This is just for containers and grid content!

const Col = props => {
  const {isField, isFixed,
    span, xlSpan, lgSpan, mdSpan, smSpan} = props;
    
  const containerClasses = [];

  // add all classes based on props
  if (isField) containerClasses.push('p-field');
  if (isFixed) containerClasses.push('p-col-fixed');
  if (span) containerClasses.push(`p-col-${Math.min(span, 12)}`);
  if (xlSpan) containerClasses.push(`p-xl-${Math.min(xlSpan, 12)}`);
  if (lgSpan) containerClasses.push(`p-lg-${Math.min(lgSpan, 12)}`);
  if (mdSpan) containerClasses.push(`p-md-${Math.min(mdSpan, 12)}`);
  if (smSpan) containerClasses.push(`p-sm-${Math.min(smSpan, 12)}`);

  return (
    <div className={containerClasses.join(' ')}
      style={props.style}>
      {props.children}
    </div>
  );
}

export default Col;
