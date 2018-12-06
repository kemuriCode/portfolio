import React, { Component } from 'react';

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
            </div>
        )
    }
}

export default AboutMe;