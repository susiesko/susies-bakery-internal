import React, { useState } from 'react';
import { Card } from 'primereact/card';

import RecipeForm from './RecipeForm/RecipeForm';

const Recipe = () => {
  return (
    <Card style={{width: '80%', margin: 'auto'}} className="p-shadow-5">
      <h1 style={{marginTop: '0px'}}>New Recipe</h1>
      <RecipeForm/>
    </Card>
  );
}

export default Recipe;
