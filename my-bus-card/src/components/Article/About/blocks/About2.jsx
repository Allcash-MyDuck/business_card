import React from 'react';
import C from './AboutMe.module.css'
import SimpleSlider from '../Slider/Slider';

const Block2 = (props) =>  {
    return(
        <div className={C.block1}>
<h1>My hobbies</h1>
<div>Like many pepople I have different hobbies. I can highlight the main hobbies: <br/>
<p>1. I like to read a books. But not all books, only fantasy genre. And not all books in this genre. My favorite series of books - books based on my equally favorite game "World of Warcraft". I like to read books about fictional worlds related to something I like, so the first books I read with HUGE PLEASURE are books from this series. I also love these books. The last one I read was about playing with full immersion in it with the help of a full-fledged suit, which, thanks to electrical impulses, conveys all the sensations and it seems very real. <br/>
</p>
<p>2. Traveling. My little dream is to visit all the capitals of the world. But at the moment I have only visited 3 countries (Germany, Norway and Poland) and two capitals (Berlin and Oslo).
</p>
<div><SimpleSlider></SimpleSlider></div>
<p>3. Computer games. Since I was 5, I love computer games. My favorite game, as I said, is the World of Warcraft. But I also played other games that I will forever remember as the best in their genre.
</p>
</div>

        </div>
    )
}

export default Block2;