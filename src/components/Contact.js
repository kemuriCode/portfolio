import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marcin Dymek</h2>
            <img
              src={require("../image/avatar-contact.png")}
              alt="avatar"
              style={{height: '350px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a student of the 3rd year of Computer Science at the Polish-Japanese Academy of Information Technology in Gdańsk. I have a good base with HTML5, CSS3 and JavaScript. I intend to develop as a Web Developer by grinding my skills in such technologies as: jQuery, Bootstrap4 and Vue.js / React.js. At the moment I'm also discovering the secrets of the Node.js.. My current professional goal is to become a Junior Web Developer</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#fff'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+48) 781-038-863
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#fff'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    marcindymek24@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;