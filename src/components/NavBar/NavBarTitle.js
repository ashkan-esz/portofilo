import React from 'react';
import {Container, Header} from "semantic-ui-react";

const NavBarTitle = ({mobile}) => {
    return (
        <Container text>
            <Header
                as='h2'
                color={mobile ? null : "blue"}
                content='The 1,000-mile marathon begins with the first step'
                inverted
                style={{
                    fontWeight: 'normal',
                    marginBottom: 0,
                    fontSize: mobile ? '1.9em' : '3.1em',
                    marginTop: mobile ? '3.5em' : '1.7em ',
                }}
            />
        </Container>
    );
};

export default NavBarTitle;