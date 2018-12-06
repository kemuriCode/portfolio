import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, Button, CardMenu, CardText, IconButton, CardActions} from 'react-mdl';
import '../App.css';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }; 
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
                {/* Project 1 */}
        <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Hangman Game</CardTitle>
            <CardText>
                Minimalistic HANGMAN game created by me... 
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/t0shifollow/hangman_game">GITHUB</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>

                {/* Project 2 */}
        <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Snake Game</CardTitle>
            <CardText>
            VERY simple snake game done in React...
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/t0shifollow/hangman_game">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
                {/* Project 3 */}
        <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>ToDo App</CardTitle>
            <CardText>
                This is simple Todo List done in React.js...
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/t0shifollow/todo_app_react">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
        </Card>
</div>
        )
        } else if (this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                {/* Project 1 */}
        <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Vue.js Demo</CardTitle>
            <CardText>
                Only Vue.js demo app make by Parcel...
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/t0shifollow/vue_with_parcel_demo">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
    </Card>
        </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                {/* Project 1 */}
        <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Twitter Clone</CardTitle>
            <CardText>
                Nice clone Twitter CRUD application with node.js...
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/t0shifollow/Twitter_CRUD_Application">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
            )
        }
}

    render() {
        return (
            <div>
                <Tabs className="category-tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} >
                    <Tab>ReactJS</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;