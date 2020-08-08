import React from 'react';
import C from './Fun.module.css'
import AppSnake from './Snake/AppSnake';
const Fun = (props) => {
    return(
        <div className={C.page_wrapper}>
            <div className={C.vision}><AppSnake className={C.vision}/></div>
            <div className={C.vision_words}><h1>Try to use your PC. =)</h1></div>
         </div>
    )
}
export default Fun;