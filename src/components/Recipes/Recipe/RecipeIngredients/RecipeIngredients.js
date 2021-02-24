import React, { useState } from 'react';

import ingredientsList from '../../../Ingredients/ingredients-data';
import Grid from '../../../../containers/UI/Grid/Grid';

import IngredientAutoComplete from './IngredientAutoComplete/IngredientAutoComplete';
import RecipeIngredient from './RecipeIngredient/RecipeIngredient';

const IngredientList = props => {
  const ingredientsBody = props.ingredients.map(ingredient => {
    const foundIngredient = ingredientsList.find(ing => +ing.id === +ingredient.id);

    return (
      <RecipeIngredient 
        key={`ing_${foundIngredient.id}`} 
        name={foundIngredient.name}
        {...ingredient}
      />
    );
  });

  return (
    <React.Fragment>
      <IngredientAutoComplete/>
      <Grid isFluid isForm style={{marginTop: '20px'}}>
        {ingredientsBody}
      </Grid>
    </React.Fragment>
  );
}

export default IngredientList;
