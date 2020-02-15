import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";
import SideBar from "../components/SideBar";

/*<div style={{background : `url(${require('../images/13.jpg')})` , height:'150vh'}} />*/

const Home = () => {
    return (
        <React.Fragment>
            <Segment>
                <Grid verticalAlign="middle" stackable divided="vertically">
                    <Grid.Row color='grey'>
                        <Grid.Column width={4}>
                            <SideBar/>
                        </Grid.Column>
                        <Grid.Column width={8} floated="right">
                            <h1>right side of the page</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Header as="h1" >
                    new part of the site
                </Header>
            </Segment>
        </React.Fragment>
    );
};


export default Home;