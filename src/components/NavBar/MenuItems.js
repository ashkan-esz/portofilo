import React, {useState} from 'react';
import {Button, Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom';

const MenuItems = ({color, activeColor}) => {
    const [active, setActive] = useState('home');
    return (
        <React.Fragment>

            <Menu.Item
                as={Link} to="/"
                name="home"
                onClick={(e, {name}) => {setActive(name)}}>

                <Button color={(active === 'home') ? activeColor : color}>
                    Home
                </Button>
            </Menu.Item>

            <Menu.Item
                as={Link} to="/projects"
                name="projects"
                onClick={(e, {name}) => {setActive(name)}}>

                <Button color={(active === 'projects') ? activeColor : color}>
                    Projects
                </Button>
            </Menu.Item>

        </React.Fragment>
    );
};

export default MenuItems;