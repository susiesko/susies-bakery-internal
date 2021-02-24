import React from 'react';
//import { InputNumber } from 'primereact/inputnumber';

import Col from '../../../../../containers/UI/Grid/Col';

const RecipeIngredient = ({name, quantity, unit}) => {
  return (
    <React.Fragment>      
      <Col isField span="6">
        {name}
      </Col>
      <Col isField span="3">
        {quantity}
      </Col>
      <Col isField span="3">
        {unit}
      </Col>
    </React.Fragment>
  );
}

export default RecipeIngredient;
