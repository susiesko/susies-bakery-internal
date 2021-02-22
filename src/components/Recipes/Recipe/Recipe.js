import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import ingredientsList from '../../../containers/Ingredients/ingredients-data';

const Recipe = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="name">Name</label>
      <InputText inputId="name" value={name} onChange={(ev) => setName(ev.target.value)} />
      <label htmlFor="ingredientsList">Ingredients</label>
      <Dropdown options={ingredientsList} optionLabel="name" optionValue="id"/>
      <Button>Save</Button>
    </div>
  );
}

export default Recipe;
