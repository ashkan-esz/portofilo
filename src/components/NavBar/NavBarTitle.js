import React from 'react';
import {Container, Header} from "semantic-ui-react";

const NavBarTitle = ({mobile}) => {
    return (
        <Container text>
            <Header
                as='h2'
                content='The 1,000-mile marathon begins with the first step'
                inverted
                className={'navbar-header ' + (mobile ? " navbar-header-mobile " : " navbar-header-pc")}
            />
        </Container>
    );
};

export default NavBarTitle;