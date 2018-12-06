import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-gird">
                    <Cell col={12}></Cell>
                        <img
                        src="../image/avatar.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Frontend / Javascript Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | Bootstrap | SASS | SQL</p>
                        </div>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;