import React from 'react';
import {Dropdown, Menu, Responsive} from "semantic-ui-react";
import NavBarSocialIcons from "./NavBarSocialIcons";
import HeroTitle from "./HeroTitle";
import SvgIcon from "../SvgIcon";
import ParticlesBackground from "../ParticlesBackground";
import SeeMore from "./SeeMore";
import MenuItemsMobile from "./MenuItemsMobile";

const getWidth = () => {
    const res = typeof window === 'undefined';
    return res ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const NavBarForMobiles = () => {

    return (
        <div>
            <Responsive
                getWidth={getWidth}
                style={{height: '100vh'}}
                maxWidth={Responsive.onlyMobile.maxWidth}>
                <ParticlesBackground/>
                <Menu
                    style={{marginTop: 0}}
                    secondary
                    pointing
                    size='large'>

                    <Dropdown
                        item
                        icon={<SvgIcon name={'humburger.svg'}/>}>
                        <Dropdown.Menu
                            style={{
                                backgroundColor:'#301056',
                                marginLeft:'0.5em',
                            }}>
                            <MenuItemsMobile/>
                        </Dropdown.Menu>
                    </Dropdown>

                    <NavBarSocialIcons mobile/>
                </Menu>

                <HeroTitle mobile/>
                <SeeMore mobile/>
            </Responsive>
        </div>
    );
};

export default NavBarForMobiles;