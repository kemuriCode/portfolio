/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    // eslint-disable-next-line no-unused-expressions
    <Switch>
        <Route exact path ={`${process.env.PUBLIC_URL}/`} component={LandingPage} />
        <Route path ={`${process.env.PUBLIC_URL}/aboutme`} component={AboutMe} />
        <Route path ={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
        <Route path ={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
        <Route path ={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
    </Switch>
);

export default Main;