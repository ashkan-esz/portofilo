import React from 'react';
import {List} from "semantic-ui-react";
import ListCard from "./ListCard";
// todo : add link to the page
// todo : color and stuff
const SideBar = () => {
    return (
        <React.Fragment>
            <List relaxed='very' animated divided size="small">

                <List.Item>
                    <ListCard/>
                </List.Item>

                <List.Item>
                    <ListCard/>
                </List.Item>

                <List.Item>
                    <ListCard/>
                </List.Item>

                <List.Item>
                    <ListCard/>
                </List.Item>

            </List>
        </React.Fragment>
    );
};

export default SideBar;