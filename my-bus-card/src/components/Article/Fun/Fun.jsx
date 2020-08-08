import React from 'react';
import C from './Fun.module.css'
import AppSnake from './Snake/AppSnake';
// import Calc from './calc/Calc';
const Fun = (props) => {
    return(
        <div className={C.page_wrapper}>
<AppSnake />
         </div>
    )
}
export default Fun;