import React from 'react';
import C from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Phone from '../pictures/phone.png'

const Header = (props) => {
return (
    <header className={C.header}>
        <NavLink to='/main'>Andrey Anufriev</NavLink>
        <div className={C.mobile}><img src={Phone} alt="Loading..." /><span className={C.myPhone}>+380954821964</span></div>
    </header>
)
}

export default Header;