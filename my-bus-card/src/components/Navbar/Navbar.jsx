import React from 'react';
import C from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
return (
        <nav className={C.nav}> 
        <div className={C.link_wrapper}>
            <NavLink to='/main' activeClassName={C.activeLink}>Main</NavLink>
            <NavLink to='/cv' activeClassName={C.activeLink}>My CV</NavLink>
            <NavLink to='about' activeClassName={C.activeLink}>About me</NavLink>
            <NavLink to='fun' activeClassName={C.activeLink}>Fun</NavLink>

            </div>
        </nav>

)
}

export default Navbar;