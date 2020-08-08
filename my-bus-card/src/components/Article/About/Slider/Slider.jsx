import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Img1 from '../../../pictures/photo1.jpg'
import Img2 from '../../../pictures/photo2.jpg'
import Img3 from '../../../pictures/photo3.jpg'
import Img4 from '../../../pictures/photo4.jpg'
import Img5 from '../../../pictures/photo5.jpg'
import Img6 from '../../../pictures/photo6.jpg'
import Img7 from '../../../pictures/photo7.jpg'
import Img8 from '../../../pictures/photo8.jpg'
import Img9 from '../../../pictures/photo9.jpg'
import Img10 from '../../../pictures/photo10.jpg'
import Img11 from '../../../pictures/photo11.jpg'


import C from './Slider.module.css'


class SimpleSlider extends React.Component {
    render() {
        const images = [
            { url: Img1 },
            { url: Img2 },
            { url: Img3 },
            { url: Img4 },
            { url: Img5 },
            { url: Img6 },
            { url: Img7 },
            { url: Img8 },
            { url: Img9 },
            { url: Img10 },
            { url: Img11 },
        ];

        return (
            <div className={C.slider_wrapper}>
                <SimpleImageSlider
                    width={420}
                    height={300}
                    images={images}
                    className={C.slider}
                    
                />
            </div>
        );
    }
}
export default SimpleSlider;