import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from "semantic-ui-react";

const MenuItems = () => {
    const [active, setActive] = useState('home');
    return (
        <React.Fragment>
            <Dropdown.Item
                as={Link} to="/"
                active={active ==='home'}
                name="home"
                onClick={(e, {name}) => {setActive(name)}}>
                <div style={{color:'#ffffff'}}>
                    Home
                </div>
            </Dropdown.Item>

            <Dropdown.Item
                style={{color:'red'}}
                as={Link} to="/projects"
                active={active ==='projects'}
                name="projects"
                onClick={(e, {name}) => {setActive(name)}}>
                <div style={{color:'#ffffff'}}>
                    Projects
                </div>
            </Dropdown.Item>
        </React.Fragment>
    );
};

export default MenuItems;