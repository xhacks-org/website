import React from 'react';
import { Carousel } from '3d-react-carousal';
import students from './assets/students.png';
import students2 from './assets/students2.jpeg';
import students3 from './assets/students3.png';
import students4 from './assets/students4.png';
import students5 from './assets/students5.jpeg';

import topPic from './assets/topPic.svg';
import bottomRight from './assets/bottomRight.svg';
import bottomLeft from './assets/bottomLeft.svg';
import './Mission.css';

let items = [
    <img className="slides__item" src={students} alt="1"/>,
    <img className="slides__item" src={students2} alt="2"/>,
    <img className="slides__item" src={students3} alt="3"/>,
    <img className="slides__item" src={students4} alt="4"/>,
    <img className="slides__item" src={students5} alt="5"/>
]


const Mission = () => {  
    return (
        <div className='mission'>
            <div className='mission__content'>
                <h1 className="content__title">Our Mission</h1>
                <img className="content__whatWeDo" src={topPic} alt='what we do' />
                <h1 className="content__text">Let’s be honest. Hackathons are great.
                 But as all great things, we think that they can be improved even further.
                  As avid hackers ourselves, we’ve been to many hackathons and we’ve noticed
                   one common trend - after the hackathon, most projects get abandoned and during
                    the hackathon, most projects are made simply for prizes.
                        <br></br><br></br>
                        That’s why we made XHacks. It’s the first hackathon with a promise for all hackers
                         - We’ll try our very best to ensure that you leave XHacks with a proper product that
                            can be used by real people.</h1>
                <img className="content__loveTech" src={bottomLeft} alt='love tech'/>
                <img className="content__yay" src={bottomRight} alt='yay'/>
            </div>
            <div className="mission__slides">
                <Carousel className="slides__carousel" slides={items} autoplay={true} interval={3000}/>
            </div>
        </div>
    )};

export default Mission;