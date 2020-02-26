import React from 'react';
import {Card, Image} from "semantic-ui-react";
// todo : add link to the page
// todo : color and stuff
const ListCard = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={require("../assests/images/1.jpg")}/>

                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
            </Card>
        </React.Fragment>
    );
};

export default ListCard;