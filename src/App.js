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
              <Header className="header" title="MARCIN DYMEK" scroll>
                  <Navigation>
                  <Link to ="/resume">RESUEM</Link>
                      <Link to ="/aboutme">ABOUT ME</Link>
                      <Link to ="/projects">PROJECTS</Link>
                      <Link to ="/contact">CONTACT</Link>
                  </Navigation>
              </Header>
              <Drawer title="MARCIN DYMEK">
                  <Navigation>
                  <Link to ="/resume">RESUEM</Link>
                      <Link to ="/aboutme">ABOUT ME</Link>
                      <Link to ="/projects">PROJECTS</Link>
                      <Link to ="/contact">CONTACT</Link>
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