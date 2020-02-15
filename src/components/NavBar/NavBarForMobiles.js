import React, {useState} from 'react';
import {Container, Icon, Menu, Responsive, Segment, Sidebar} from "semantic-ui-react";
import NavBarSocialIcons from "./NavBarSocialIcons";
import MenuItems from "./MenuItems";
import NavBarTitle from "./NavBarTitle";


const getWidth = () => {
    const res = typeof window === 'undefined';
    return res ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBarForMobiles = () => {
    const [sideBar, setSideBar] = useState(false);

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
                    onHide={() => {
                        setSideBar(false)
                    }}
                    visible={sideBar}>

                    <Menu
                        secondary
                        pointing
                        size="huge"
                        fluid
                        vertical
                        color="grey">
                        <MenuItems/>
                    </Menu>
                </Sidebar>


                <Sidebar.Pusher dimmed={sideBar}>
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        className="navbar-background-image"
                        style={{height: '45vh'}}>
                        <Container>
                            <Menu
                                secondary
                                pointing
                                size='large'>

                                <Menu.Item onClick={() => {
                                    setSideBar(true)
                                }}>
                                    <Icon name='sidebar'/>
                                </Menu.Item>
                                <NavBarSocialIcons/>
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