import React from 'react';
import {Grid, Header, Responsive, Segment} from "semantic-ui-react";
import SideBar from "../components/SideBar/SideBar";

const getWidth = () => {
    return window.innerWidth < Responsive.onlyTablet.minWidth;
};

const Home = () => {
    return (
        <React.Fragment>
            <Segment
                style={{
                    margin:0,
                    paddingLeft:getWidth() ? 0 : null,
                    paddingRight:getWidth() ? 0 : null
                }}>
                <Grid
                    verticalAlign="middle"
                    divided="vertically"
                    stackable >

                    <Grid.Row color='grey'>
                        <Grid.Column width={4} floated="left">
                            <SideBar />
                        </Grid.Column>

                        <Grid.Column width={8} >
                            <h1>right side of the page</h1>
                            <h1>right side of the page</h1>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Header as="h1" >
                            new part of the site
                        </Header>
                    </Grid.Row>

                </Grid>
            </Segment>

        </React.Fragment>
    );
};


export default Home;