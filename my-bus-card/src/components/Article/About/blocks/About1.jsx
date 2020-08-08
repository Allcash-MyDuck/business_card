import React from 'react';
import C from './AboutMe.module.css'

const Block1 = (props) =>  {
    return(
        <div className={C.block1}>
<h1>A little bit about my life</h1> 
<div>
<p>As you already understood, my name is Andrey Anufriev. <br />I was born in the last year of 20 century in a small town, town is called Nikopol. I had been living there almost 17 years, after I moved to Kiev to get higher education. Why I didn't stay in Nikopol to study? Cause in Nikopol there are no universities other then Economic University and Law Academy. </p>
<p>In Kiev I studied and worked in parallel. I have been working shop assistant in 'ALLO' company for a 2 years and 4 month. I was very private person. While I worked there I met a lot of people, who became my friends and helped me to became more open mind person. </p>
<p>I also met a person who eventually became very important to me. This person always supports me, thanks to this person I understood what I want from life and finally solved the issue that tormented me for a long time, or rather, this person helped me to determine the field of activity. This person is my soul mate named Veronika. </p>
<p>Veronika convinced me to take programming courses. I have been finished front-end courses a few month ago. This became a kind of impetus to start developing in the field of IT.
</p>
        </div>
    </div>
    )
}

export default Block1;