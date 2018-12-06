/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header" title={<Navigation className="logo-name"><Link to={`${process.env.PUBLIC_URL}/`}>MARCIN DYMEK</Link></Navigation>} scroll>
                  <Navigation>
                    <Link to ={`${process.env.PUBLIC_URL}/resume`}>RESUME</Link>
                    <Link to={`${process.env.PUBLIC_URL}/aboutme`}>ABOUT ME</Link>
                    <Link to ={`${process.env.PUBLIC_URL}/projects`}>PROJECTS</Link>
                    <Link to ={`${process.env.PUBLIC_URL}/contact`}>CONTACT</Link>
                  </Navigation>
              </Header>
              <Drawer className="slide-menu" title="MARCIN DYMEK">
                  <Navigation>
                    <Link to={`${process.env.PUBLIC_URL}/`}><img className="menu-logo" src={require('./image/avatar-menu.png')}/></Link>
                    <Link to ={`${process.env.PUBLIC_URL}/resume`}>RESUME</Link>
                    <Link to={`${process.env.PUBLIC_URL}/aboutme`}>ABOUT ME</Link>
                    <Link to ={`${process.env.PUBLIC_URL}/projects`}>PROJECTS</Link>
                    <Link to ={`${process.env.PUBLIC_URL}/contact`}>CONTACT</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;