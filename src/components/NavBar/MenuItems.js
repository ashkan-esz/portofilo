import React, {useState} from 'react';
import {Menu} from "semantic-ui-react";
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
                <div style={{marginLeft: '1em'}}>
                    Home
                </div>
            </Menu.Item>
            <Menu.Item
                as={Link} to="/rezome"
                name="rezome"
                active={active === 'rezome'}
                onClick={(e, {name}) => {
                    setActive(name)
                }}>
                <div style={{marginLeft: '1em',color:'#3bf3ff'}}>
                    Rezome
                </div>
            </Menu.Item>


            <Menu.Item as='a'>
                <div style={{marginLeft: '1em'}}>
                    Company
                </div>
            </Menu.Item>
            <Menu.Item as='a'>
                <div style={{marginLeft: '1em'}}>
                    Careers
                </div>
            </Menu.Item>

        </React.Fragment>
    );
};


export default MenuItems;