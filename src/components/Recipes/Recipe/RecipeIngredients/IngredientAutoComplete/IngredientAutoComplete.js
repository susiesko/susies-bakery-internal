import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

import FloatLabel from '../../../../../containers/UI/FloatLabel/FloatLabel';
import InputGroup from '../../../../../containers/UI/InputGroup/InputGroup';
import InputGroupAddon from '../../../../../containers/UI/InputGroup/InputGroupAddon';

import ingredientsList from '../../../../Ingredients/ingredients-data';

const IngredientAutoComplete = props => {
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');

  const searchIngredients = (ev) => {
    setTimeout(() => {
      let filteredIngs;

      if (!ev.query.trim().length) {
        filteredIngs = [...ingredientsList];
      }
      else {
        filteredIngs = ingredientsList.filter((ing) => {
          return ing.name.toLowerCase().startsWith(ev.query.toLowerCase());
        });
      }

      setFilteredIngredients(filteredIngs);
    }, 150);
  }
  
  return (
    <FloatLabel>        
      <InputGroup>
        <AutoComplete 
          id="ingredientSearch"
          field="name"
          value={selectedIngredient}
          suggestions={filteredIngredients}
          completeMethod={searchIngredients}
          onChange={(ev) => setSelectedIngredient(ev.value)}
        />
        <InputGroupAddon>+</InputGroupAddon>
      </InputGroup>    
      <label htmlFor="ingredientSearch">Ingredient Search</label>
    </FloatLabel>
  );
}

export default IngredientAutoComplete;
