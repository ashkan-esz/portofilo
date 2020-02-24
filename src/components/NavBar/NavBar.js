import React from 'react';
import NavBarForDesktop from './NavBarForDesktop';
import NavBarForMobiles from './NavBarForMobiles';
// todo : use lazy import here
const NavBar = () => {
    return (
        <div>
            <NavBarForDesktop/>
            <NavBarForMobiles/>
        </div>
    );
};

export default NavBar;