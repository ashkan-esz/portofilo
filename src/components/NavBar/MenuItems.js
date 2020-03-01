import React, {useState} from 'react';
import {Button, Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom';

const MenuItems = ({fixed}) => {
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

                {
                    (!fixed) ? <Button
                        color="linkedin">
                        Home
                    </Button> : <div>Home</div>
                }
            </Menu.Item>
            <Menu.Item
                as={Link} to="/rezome"
                name="rezome"
                active={active === 'rezome'}
                onClick={(e, {name}) => {
                    setActive(name)
                }}>

                {
                    (!fixed) ? <Button
                        color="linkedin">
                        Rezome
                    </Button> : <div>Rezome</div>
                }
            </Menu.Item>


            <Menu.Item
                as='a'
                name="company"
                active={active === 'company'}
                onClick={(e, {name}) => {
                    setActive(name)
                }}>
                {
                    (!fixed) ? <Button
                        color="linkedin">
                        Company
                    </Button> : <div>Company</div>
                }
            </Menu.Item>

            <Menu.Item as='a'>
                {
                    (!fixed) ? <Button
                        color="linkedin">
                        Careers
                    </Button> : <div>Careers</div>
                }
            </Menu.Item>

        </React.Fragment>
    );
};


export default MenuItems;