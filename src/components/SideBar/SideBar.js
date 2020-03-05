import React from 'react';
import {Card} from "semantic-ui-react";
import ListCard from "./ListCard";

const SideBar = () => {
    return (
        <React.Fragment>
            <Card.Group centered>
                <Card fluid>
                    <Card.Content textAlign="center">
                        <Card.Header style={{color: 'teal'}}>Recent Activity</Card.Header>
                    </Card.Content>
                </Card>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
            </Card.Group>
        </React.Fragment>
    );
};

export default SideBar;