import React from 'react';
import C from './Footer.module.css';
import Facebook from './../pictures/facebook.png';
import Telega from './../pictures/telega.png';
import Inst from './../pictures/inst.svg'


const Footer = (props) => {
return (
   <footer className={C.footer}>
       <a href="https://www.facebook.com/profile.php?id=100006176852693" className={C.social}><img src={Facebook} alt=""/></a>
       <a href="https://t.me/FreeMan1488" className={C.social}><img src={Telega} alt=""/></a>
       <a href="https://www.instagram.com/goodsmallmaniac/"  className={C.social}><img src={Inst} alt=""/></a>
   </footer>

)
}
export default Footer;