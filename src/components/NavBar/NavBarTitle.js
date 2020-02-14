import React from 'react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

const NavBarTitle = ({mobile}) => {
    return (
        <Container text>
            <Header
                as='h2'
                color={mobile ? null :"blue"}
                content='The 1,000-mile marathon begins with the first step'
                inverted
                className={'navbar-header ' + (mobile ? " navbar-header-mobile " : " navbar-header-pc")}
            />
        </Container>
    );
};

export default NavBarTitle;