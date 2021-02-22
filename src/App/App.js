import React from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './../logo.svg';

import Layout from '../hoc/Layout/Layout';
import Home from '../containers/Home/Home';
import Recipes from '../containers/Recipes/Recipes';
import Recipe from '../components/Recipes/Recipe/Recipe';
import Ingredients from '../containers/Ingredients/Ingredients';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          {/* I plan on cleaning up the routes later - SER,2021/02/21  */}
          <Route path="/ingredients" component={Ingredients}/>
          <Route path="/recipes/new" exact component={Recipe}/>
          <Route path="/recipes" exact component={Recipes}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
