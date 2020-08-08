import React from 'react';
import C from './Main.module.css';
import Ava from '../../pictures/ava1.jpg'
const Main = () => {
    return (
        <div className={C.main}>
            <div className={C.start_wrap}>
                <span className={C.ava_wrapper}>
                    <img src={Ava} alt="Loading..." />
                </span>
                <div className={C.my_decs_wrapp}>
                    <h3>A few words about me</h3>
                    <div className={C.descrip}>
                       All my life I have been looking for dream job... I studied in the university, specialty "computer science", and even then I couldn't imagine who I want to work in the future. For the first time I thought about this when I was 5-6 years old, and this mind haunted me for many years. Once I seriously decided to take my mind and take a closer look. And suddenly I realized that my dream job was nearby, I just didn't notice it. I went to programming courses, then watched a lot of video tutorials on YouTube.Then I realized that I had found my destiny. <b><p>And now I'm looking for a job. =)</p> </b>
 

                       </div>
                </div>
            </div>
            <div className={C.end_wrap}>
                   <div> <h3>My skills end experience</h3>
                    <div className={C.lists_wrapper}>
                    <dl className={C.dldt}>
                    <dt className={C.skill}> <a href='https://github.com/Paladin-From-335'>Git-hub</a> </dt>
                        <dt className={C.skill}>HTML </dt>
                        <dt className={C.skill}>CSS</dt>
                        <dt className={C.skill}>JS </dt>
                        <dt className={C.skill}>React</dt>
                        <dt className={C.skill}>Redux</dt>
                        <dt className={C.skill}>English </dt>
                    </dl>
                    <dl > 
                    <dt className={C.skill}>2 month </dt>
                        <dt className={C.skill}>6 month</dt>
                        <dt className={C.skill}>6 month</dt>
                        <dt className={C.skill}>3 month</dt>
                        <dt className={C.skill}>2 month</dt>
                        <dt className={C.skill}>1 month</dt>
                        <dt className={C.skill}>Intermediate </dt>
                    </dl>
                </div>
                </div>
                <div> 
                   <p className={C.heading}>My extra-skills</p>
                    <div className={C.E_lists_wrapper}>
                    <dl>
                    <dt className={C.Eskill}> Bad jokes </dt>
                        <dt className={C.Eskill}>Responsibility</dt>
                        <dt className={C.Eskill}>Learnability</dt>
                        <dt className={C.Eskill}>Stress resistance</dt>
                        <dt className={C.Eskill}>Purposefulness</dt>
                        <dt className={C.Eskill}>Interest in new</dt>
                        <dt className={C.Eskill}>Teamwork</dt>
                    </dl>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
