import React from 'react';
import topPic from './assets/topPic.svg';
import bottomRight from './assets/bottomRight.svg';
import bottomLeft from './assets/bottomLeft.svg';
import './Mission.css';


const Mission = ({ reference }) => {  
    return (
        <div className='mission' ref={reference}>
            <div className='mission__content'>
                <h1 className="content__title maintext-gradient">Our Mission</h1>
                <img className="content__whatWeDo" src={topPic} alt='what we do' />
                <h1 className="content__text">As avid programmers ourselves, we’ve been to many hackathons and we’ve noticed
                   one common trend - after the hackathon, most projects get abandoned and during
                    the hackathon, most projects are made simply for prizes.
                        <br></br><br></br>
                        That’s why we made XHacks. Although we know that a full production app can't be 
                        built in one weekend we'll do our best to ensure that you have the necessary skills, 
                        connections and resources to get started on a product that can scale beyond the hackathon. Additionally, we provide prizes and workshops that truly help further our hackers' skills far more than your regular event.</h1>
                <img className="content__loveTech" src={bottomLeft} alt='love tech'/>
                <img className="content__yay" src={bottomRight} alt='yay'/>
            </div>
        </div>
    )};

export default Mission;