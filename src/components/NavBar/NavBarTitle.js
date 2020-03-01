import React from 'react';
import {Container, Header} from "semantic-ui-react";

const NavBarTitle = ({mobile}) => {
    return (
        <Container text>
            <Header
                as='h2'
                content='The 1,000-mile marathon begins with the first step'
                inverted
                style={{
                    fontWeight: 'normal',
                    marginBottom: 0,
                    fontSize: mobile ? '1.7em' : '3.8em',
                    marginTop: mobile ? '2.5em' : '2em ',
                    color : '#72ff77'
                }}
            />
        </Container>
    );
};

export default NavBarTitle;