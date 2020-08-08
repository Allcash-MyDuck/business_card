import React from 'react';
import C from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
return (
    <header className={C.header}>
        <NavLink to='/main'>Andrey Anufriev</NavLink>
    </header>
)
}

export default Header;