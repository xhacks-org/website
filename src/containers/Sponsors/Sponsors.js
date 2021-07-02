import React from 'react';
import qoom from './assets/image 1.svg';
import HyperX from './assets/image 3.svg';
import sling from './assets/image 4.svg';
import prod from './assets/image 5.svg';
import symbl from './assets/symbl.svg';
import voiceflow from './assets/voiceflow.svg';
import './sponsors.css';


const Sponsors = ({ reference }) => {  
    return (
        <div className='sponsors' ref={reference}>
            <h1 className='header maintext-gradient sponsors_title'>Our Sponsors</h1>
            <div className='sponsors__content'>
                <h1 className="sponsors__text">These are the people / organizations that are helping make XHacks a reality. Each and every one of them has helped us in some way so we thank them for all their support! Some of these companies will be around at the event, so make sure to say hi 👋.</h1>
            </div>
            <div className='sponsors-grid'>
                <div className='sponsors_item' onClick={() => window.open('https://qoom.io')}><img src={qoom} alt='Qoom' /></div>
                <div className='sponsors_item' onClick={() => window.open('https://producthunt.com')}><img src={prod} alt='ProductHunt' /></div>
                <div className='sponsors_item' onClick={() => window.open('https://slingshotahead.com')}><img  src={sling} alt='Slingshot' /></div>
                <div className='sponsors_item' onClick={() => window.open('https://hyperx.com')}><img src={HyperX} alt='HyperX' /></div>
                <div className='sponsors_item' onClick={() => window.open('https://symbl.ai')}><img src={symbl} alt='Symbl' /></div>
                <div className='sponsors_item' onClick={() => window.open('https://voiceflow.com')}><img src={voiceflow} alt='Voiceflow' /></div>
            </div>
        </div>
    )};

export default Sponsors;