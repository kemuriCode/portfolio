/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-img" src={require('../image/avatar.png')} />
                        <div className="banner-text">
                            <h1>Junior Web Developer</h1>
                            <hr/>
                            <p>HTML / CSS | Jav￼aScript | ReactJS | Bootstrap | SASS | SQL</p>
                            <div className="social-links">
                                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square" aria-hidden="true" />
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter-square" aria-hidden="true" />
                                </a>
                                <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;