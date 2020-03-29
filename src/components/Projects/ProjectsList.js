import React from 'react';
import {Grid, Header} from "semantic-ui-react";
import './ProjectsList.css';

const ProjectsList = () => {
    return (
        <div className={'projects'}>

            <Header
                className={'projects-header'}
                as="h1"
                textAlign={"center"}
                color="black">
                <Header.Content>Projects</Header.Content>
                <hr/>
            </Header>

            <Grid container centered stackable relaxed>
                <Grid.Row columns={"4"}  centered>
                    <Grid.Column textAlign={"center"}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );
};

export default ProjectsList;