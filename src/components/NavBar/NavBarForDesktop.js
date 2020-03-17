import React, {useState} from 'react';
import {Container, Menu, Responsive, Visibility} from "semantic-ui-react";
import MenuItems from "./MenuItems";
import NavBarSocialIcons from "./NavBarSocialIcons";
import HeroTitle from "./HeroTitle";
import ParticlesBackground from "../ParticlesBackground";
import SeeMore from "./SeeMore";

const getWidth = () => {
    const res = typeof window === 'undefined';
    return res ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBarForDesktop = () => {
    const [fixed, setFixed] = useState(false);

    return (
        <div>
            <Responsive minWidth={Responsive.onlyTablet.minWidth} getWidth={getWidth} >
                <Visibility
                    style={{height:'100vh'}}
                    once={false}
                    onBottomPassedReverse={() => {setFixed(false)}}
                    onBottomPassed={() => {setFixed(true)}}>

                        <ParticlesBackground/>

                        <Menu
                            style={{
                                marginTop:0,
                                backgroundColor: fixed ? '#123456' :'#060229'
                            }}
                            fixed={fixed ? 'top' : null}
                            inverted
                            borderless
                            size="large">

                            <Container>
                                <MenuItems color={"blue"} activeColor={"violet"} fixed={false}/>
                                <NavBarSocialIcons/>
                            </Container>
                        </Menu>

                        <HeroTitle/>
                        <SeeMore/>
                </Visibility>
            </Responsive>
        </div>
    );
};

export default NavBarForDesktop;