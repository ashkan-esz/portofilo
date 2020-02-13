import React from 'react';
import NavBarForDesktop from './NavBarForDesktop';
import NavBarForMobiles from './NavBarForMobiles';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <NavBarForDesktop/>
            <NavBarForMobiles/>
        </div>
    );
};

export default NavBar;