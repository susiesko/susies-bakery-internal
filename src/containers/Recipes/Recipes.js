import React from 'react';
import { NavLink } from 'react-router-dom';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import classes from './Recipes.module.scss';
import recipeList from './recipe-data';

const Products = () => {
  const renderGridItem = (data) => {
    return (
      <div className={`p-col-12 p-md-4 ${classes.Recipe}`}>
        <Card>
          {data.name}
        </Card>
      </div>
    );
  }

  const itemTemplate = (recipe, layout) => {
    if (!recipe) {
      return;
    }

    return renderGridItem(recipe);
  }

  return (
    <React.Fragment>
      <div>
        <Button>
          <NavLink to="/recipes/new">New Recipe</NavLink>
        </Button>
      </div>
      <DataView
        className={classes.Recipes}
        layout="grid"
        value={recipeList} 
        itemTemplate={itemTemplate} 
      />
    </React.Fragment>
  );
}

export default Products;
