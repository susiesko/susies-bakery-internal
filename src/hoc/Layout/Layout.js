import React from 'react';

import Header from '../../containers/Header/Header';
import Content from '../../containers/Content/Content';
import Footer from '../../containers/Footer/Footer';
import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = props => {
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
