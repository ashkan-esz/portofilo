import React, {useEffect, useState} from 'react';
import {Button, Menu, Responsive} from "semantic-ui-react";
import getWidth from "../getWidth";
import SvgIcon from "../SvgIcon";
import {Link, useLocation} from "react-router-dom";
import HeroTitle from "./HeroTitle";

const NavBarForDesktop = () => {
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
                minWidth={Responsive.onlyTablet.minWidth}>

                <Menu
                    className={'navbar-desktop'}
                    borderless
                    secondary
                    size="large">

                    <Menu.Item
                        className={'logo'}
                        as={Link} to="/"
                        name="home"
                        onClick={handleItemClick}>
                        <div>
                            <SvgIcon name="logo3.svg" size={"150px"}/>
                        </div>
                    </Menu.Item>

                    <Menu.Item
                        className={'menu-item1'}
                        as={Link} to="/"
                        name="home"
                        onClick={handleItemClick}>

                        <Button
                            active={active === 'home'}
                            basic={!(active === 'home')}
                            color={(active === 'home') ? 'teal' : "violet"}>
                            Home
                        </Button>
                    </Menu.Item>

                    <Menu.Item
                        className={'menu-item2'}
                        // as={Link} to="/projects"
                        disabled
                        name="projects"
                        onClick={handleItemClick}>

                        <Button
                            disabled
                            active={active === 'projects'}
                            basic={!(active === 'projects')}
                            color={(active === 'projects') ? 'teal' : "violet"}>
                            Projects
                        </Button>
                    </Menu.Item>
                </Menu>

                <HeroTitle/>
            </Responsive>
        </div>
    );
};

export default NavBarForDesktop;