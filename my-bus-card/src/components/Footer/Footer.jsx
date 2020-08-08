import React from 'react';
import C from './Footer.module.css';
import Facebook from './../pictures/facebook.png';
import Telega from './../pictures/telega.png';
import Inst from './../pictures/inst.svg'


const Footer = (props) => {
    return (
        <footer className={C.footer}>
            
            <div className={C.soc_wrap}> 
            <h4>Social</h4>
                <a href="https://www.facebook.com/profile.php?id=100006176852693" className={C.social}><img src={Facebook} alt="" className={C.upSoc}/></a>
                <a href="https://t.me/FreeMan1488" className={C.social}><img src={Telega} alt="" className={C.upSoc}/></a>
                <a href="https://www.instagram.com/goodsmallmaniac/" className={C.social}><img src={Inst} alt="" className={C.downSoc}/></a>
            </div>
            <div className={C.cont_wrap}>
                <h4>Contacts</h4>
                <span className={C.contact}><a href='https://github.com/Paladin-From-335'>github.com/Paladin-From-335</a></span>
               <span className={C.contact}>andrei.anufriev.work@gmail.com</span>
                <span className={C.contact}>+380954821964</span>
            </div>

        </footer>

    )
}
export default Footer;