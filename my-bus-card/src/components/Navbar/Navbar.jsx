import React from 'react';
import C from './Navbar.module.css'

const Navbar = (props) => {
return (
        <nav className={C.nav}>
            <span>Main</span>
            <span>CV</span>
            <span>About me</span>
            <div className={C.line}></div>

        </nav>

)
}

export default Navbar;