import React, {useState} from 'react';
// import {Menu} from "semantic-ui-react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import {Link} from 'react-router-dom';

const MenuItems = () => {
    const [active, setActive] = useState('home');
    return (
        <React.Fragment>
            <Menu.Item
                as={Link} to="/"
                name="home"
                active={active === 'home'}
                onClick={(e, {name}) => {
                    setActive(name)
                }}>
                Home
            </Menu.Item>
            <Menu.Item
                as={Link} to="/rezome"
                name="rezome"
                active={active === 'rezome'}
                onClick={(e, {name}) => {
                    setActive(name)
                }}>
                Rezome
            </Menu.Item>

            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
        </React.Fragment>
    );
};


export default MenuItems;