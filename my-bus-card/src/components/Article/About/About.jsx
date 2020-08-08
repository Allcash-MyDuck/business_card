import React from 'react';
import C from './About.module.css';
import Block1 from './blocks/About1';
import Block2 from './blocks/About2';
import Block3 from './blocks/About3';

const About = () => {
    return (
        <div className={C.main}>
            <Block1 />
            <Block2 />
            <Block3 />
        </div>
    )
}
export default About;
