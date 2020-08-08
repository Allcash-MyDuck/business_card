import React from 'react';
import C from './CV.module.css';
import Gmail from '../../pictures/gmail_logo.png'
import Phone from '../../pictures/phone.png'


const CV = () => {
    return (
        <div className={C.main}>
            <h2>My CV</h2>
            <h1>Andrey Anufriev</h1>
            <h3>Junior front-end developer</h3>
            <div>
                <div className={C.contact_1}><img src={Phone} alt="Loading..." />+380954821964</div>
                <br />
                <div className={C.contact_2}><img src={Gmail} alt="Loading..." /> andrei.anufriev.work@gmail.com</div>
                <div>Birthday: 23.08.1999</div>
                <div>City: Kyiv</div>
            </div>

            <div>
                <h3>Work experience</h3>
                <dl>
                    <dt><h4>Shop assistant</h4></dt>
                    <dt>LTD "ALLO"</dt>
                    <dt>Since 06.09.2017 to 15.01.2020</dt>
                </dl>
                <div><p>Responsibilities:</p>
                    <ul>
                        <li>communication with customers;</li>
                        <li>identifying the need;</li>
                        <li>sale;</li>
                        <li>maintaining cleanliness;</li>
                        <li>merchandising;</li>
                    </ul>
                </div>
                <dl>
                    <dt><h4>Sales manager</h4></dt>
                    <dt>ElIA TRADE LP</dt>
                    <dt>Since 30.01.2020 to 23.02.2020</dt>
                </dl>
                <div><p>Responsibilities:</p>
                    <ul>
                        <li>calling clients;</li>
                        <li>collection of information;</li>
                        <li>identifying the need;</li>
                        <li>sale;</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Education</h3>
                <dl>
                    <dt>Kyiv University of Culture (2016-2020)</dt>
                    <dt>Bachelor</dt>
                    <dt><b>Specialty:</b></dt>
                    <dt> "computer science and information technology"</dt>
                </dl>
            </div>
            <div>
                <h3>Languanges</h3>
                <dl>
                    <dt>English - intermediate</dt>
                    <dt>Russian - native</dt>
                    <dt>Ukrainian - native</dt></dl>
            </div>
            <div>
                <h3>Hard skills</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
    )
}
export default CV;
