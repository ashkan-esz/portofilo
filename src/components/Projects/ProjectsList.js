import React from 'react';
import {Grid, Header} from "semantic-ui-react";
import './ProjectsList.css';
import Project from "./project";

const ProjectsList = () => {
    return (
        <div className={'projects'}>

            <Header
                className={'projects-header'}
                as="h1"
                textAlign={"center"}
                color="black">
                <Header.Content>My Recent Work</Header.Content>
                <hr/>
            </Header>

            <Grid className={'projects-list-grid'} container centered stackable relaxed>
                <Grid.Row columns={"3"} centered>
                    <Grid.Column textAlign={"center"}>
                        <Project
                            imageName={'portofilo-site.jpg'}
                            text={'my first website for profile'}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );
};

export default ProjectsList;