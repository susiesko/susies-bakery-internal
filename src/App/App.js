import logo from './../logo.svg';

import Layout from '../hoc/Layout/Layout';
import Home from '../containers/Home/Home';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
