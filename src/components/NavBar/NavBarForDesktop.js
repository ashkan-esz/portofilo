import React, {useState} from 'react';
// import {Container, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";
import MenuItems from "./MenuItems";
import NavBarSocialIcons from "./NavBarSocialIcons";
import NavBarTitle from "./NavBarTitle";
import Responsive from "semantic-ui-react/dist/commonjs/addons/Responsive";
import Visibility from "semantic-ui-react/dist/commonjs/behaviors/Visibility";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";

const getWidth = () => {
    const res = typeof window === 'undefined';
    return res ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBarForDesktop = () => {
    const [fixed, setFixed] = useState(false);

    return (
        <div>
            <Responsive minWidth={Responsive.onlyTablet.minWidth} getWidth={getWidth}>
                <Visibility
                    once={false}
                    onBottomPassedReverse={() => {
                        setFixed(false)
                    }}
                    onBottomPassed={() => {
                        setFixed(true)
                    }}>
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        raised
                        className="navbar-background-image"
                        style={{height: '55vh'}}>

                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={fixed}
                            secondary={!fixed}
                            pointing={!fixed}
                            color={fixed ? 'grey' : null}
                            size="large">

                            <Container>
                                <MenuItems/>
                                <NavBarSocialIcons/>
                            </Container>
                        </Menu>

                        <NavBarTitle/>

                    </Segment>
                </Visibility>
            </Responsive>
        </div>
    );
};

export default NavBarForDesktop;