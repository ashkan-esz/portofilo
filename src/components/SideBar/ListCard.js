import React from 'react';
import {Card} from "semantic-ui-react";

const ListCard = () => {
    return (
        <React.Fragment>
            <Card color="blue" fluid style={{marginTop: 0}}>
                <Card.Content>
                    <Card.Header
                        style={{color: '#1b5f97', cursor: 'pointer'}}
                        onClick={() => {window.open('https://bloorin.netlify.com', '_blank')}}>
                        Bolorin Shahed
                    </Card.Header>
                    <Card.Meta>Owner : Ebrahimi</Card.Meta>
                    <Card.Description>
                        a website for <strong>bloorin shahed</strong> company witch sell Sanitary items
                    </Card.Description>
                </Card.Content>
            </Card>
        </React.Fragment>
    );
};

export default ListCard;