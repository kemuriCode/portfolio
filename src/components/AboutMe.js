import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl';

class AboutMe extends Component {
    render() {
        return (
            <div className="component">
                <h1 className="banner-text">About Me</h1>
                <img
              src={require("../image/avatar-cat.png")}
              alt="avatar"
              style={{height: '500px'}}
               />
               {/* Progress Bar with Indeterminate Progress */}
            <ProgressBar style={{ textAlign: 'center', margin: 'auto' }}  indeterminate />
            </div>
        )
    }
}

export default AboutMe;