import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import FloatLabel from '../../../../containers/UI/FloatLabel/FloatLabel';
import Grid from '../../../../containers/UI/Grid/Grid';
import Col from '../../../../containers/UI/Grid/Col';

const RecipeForm = () => {
  // dummy data for now
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      quantity: 3,
      unit: 'block'
    },
    {
      id: 2,
      quantity: 1,
      unit: 'cup'      
    }
  ]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Grid isFluid isForm>
      <Col isField smSpan="12">  
        <FloatLabel>
          <InputText 
            id="name" 
            value={name} 
            onChange={(ev) => setName(ev.target.value)} 
          />
          <label htmlFor="name">Recipe Name</label>
        </FloatLabel>
      </Col>
      <Col isField smSpan="12">  
        <FloatLabel>
          <InputTextarea 
            id="description" 
            value={description} 
            onChange={(ev) => setDescription(ev.target.value)} 
          />
          <label htmlFor="description">Description</label>
        </FloatLabel>
      </Col> 
      
      <Col isField smSpan="12">
        <RecipeIngredients 
          ingredients={ingredients}
        />
      </Col>

      <Col isField isFixed>
        <Button>Save</Button>
      </Col>
    </Grid>
  );
}

export default RecipeForm;
