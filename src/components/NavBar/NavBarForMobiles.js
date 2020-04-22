import React, {useEffect, useState} from 'react';
import {Dropdown, Menu, Responsive} from "semantic-ui-react";
import HeroTitle from "./HeroTitle";
import SvgIcon from "../SvgIcon";
import getWidth from "../getWidth";
import {Link, useLocation} from "react-router-dom";

const NavBarForMobiles = () => {
    const [active, setActive] = useState('home');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') setActive('home');
        else if (location.pathname === '/projects') setActive('projects');
    }, [location]);
    const handleItemClick = (e, {name}) => {
        setActive(name)
    };
    return (
        <div>
            <Responsive
                className={'hero-image'}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}>

                <Menu
                    secondary
                    pointing
                    size='large'>

                    <Dropdown
                        item
                        icon={<SvgIcon name={'humburger.svg'}/>}>
                        <Dropdown.Menu
                            className={'dropdown-menu'}>
                            <Dropdown.Item
                                as={Link} to="/"
                                active={active === 'home'}
                                name="home"
                                onClick={handleItemClick}>
                                <div
                                    className={(active === 'home') ? 'dropdown-menu-active' : 'dropdown-menu-deactive'}>
                                    Home
                                </div>
                            </Dropdown.Item>

                            <Dropdown.Item
                                as={Link} to="/projects"
                                active={active === 'projects'}
                                name="projects"
                                disabled
                                onClick={handleItemClick}>
                                <div
                                    className={(active === 'projects') ? 'dropdown-menu-active' : 'dropdown-menu-deactive'}>
                                    Projects
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item
                        className={'logo-mobile'}
                        as={Link} to="/"
                        position={"right"}
                        name="home"
                        onClick={handleItemClick}>
                        <div>
                            <SvgIcon name="logo3.svg" size={"150px"}/>
                        </div>
                    </Menu.Item>
                </Menu>

                <HeroTitle mobile/>
            </Responsive>
        </div>
    );
};

export default NavBarForMobiles;