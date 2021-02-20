import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../containers/Header/Header';
import Content from '../../containers/Content/Content';
import Footer from '../../containers/Footer/Footer';
import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = props => {
  console.log(props);
  return (
    <React.Fragment>
      <Header>
        <Toolbar/>
      </Header>

      <Content>
        {props.children}
      </Content>

      <Footer/>
    </React.Fragment>
  );
}

export default Layout;
