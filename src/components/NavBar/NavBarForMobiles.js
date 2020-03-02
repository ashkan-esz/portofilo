import React, {useState} from 'react';
import {Container, Menu, Responsive, Segment, Sidebar} from "semantic-ui-react";
import NavBarSocialIcons from "./NavBarSocialIcons";
import MenuItems from "./MenuItems";
import NavBarTitle from "./NavBarTitle";
import SvgIcon from "../SvgIcon";

const getWidth = () => {
    const res = typeof window === 'undefined';
    return res ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBarForMobiles = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <div>
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}>

                <Sidebar
                    as={Menu}
                    animation="slide along"
                    width="thin"
                    vertical
                    onHide={() => {setVisible(false)}}
                    visible={isVisible}>

                    <Menu
                        secondary
                        pointing
                        size="huge"
                        fluid
                        vertical
                        color="grey">
                        <MenuItems fixed={true} color={"blue"} activeColor={"teal"}/>
                    </Menu>
                </Sidebar>


                <Sidebar.Pusher dimmed={isVisible}>
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        style={{
                            background: `url(${require('../../assests/images/hero-image-mobile.jpg')}) center/cover no-repeat`,
                            height: '50vh'
                        }}>
                        <Container>
                            <Menu
                                secondary
                                pointing
                                size='large'>

                                <Menu.Item onClick={() => {setVisible(true)}}>
                                    {/*<Icon name='sidebar'/>*/}
                                    <SvgIcon name={'humburger.svg'}/>
                                </Menu.Item>
                                <NavBarSocialIcons mobile/>
                            </Menu>
                        </Container>
                        <NavBarTitle mobile/>
                    </Segment>
                </Sidebar.Pusher>

            </Responsive>
        </div>
    );
};

export default NavBarForMobiles;