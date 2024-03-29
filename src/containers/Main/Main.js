import React from 'react';
import likeYou from './assets/likeYou.svg';
import discord from './assets/devPost.svg';
import devPost from './assets/discord.svg';

import '../Main/Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__text'>
                <h1 className='text__date'>AUGUST 6 - 8, 2021</h1>
                <img className='text__likeYou' src={likeYou} alt='like you' />
                <h1 className='text__title'>
                    XHacks helps hackers build <span className='maintext-gradient'>great software</span>
                </h1>
                <h1 className='text__subTitle'>
                    Let’s be honest. Hackathons are great. But we think that they can be improved even further. That's why we
                    created XHacks, to inspire hackers to create products that last.
                </h1>
                <div className='text__action'>
                    <div className='action__buttons'>
                        <button
                            className='action__register'
                            onClick={() => {
                                window.open('https://xhacks.devpost.com');
                            }}
                        >
                            See Results
                        </button>
                        <button
                            className='action__sponsor'
                            onClick={() => {
                                window.open('https://xhacks.netlify.app/sponsorshipPKG.pdf');
                            }}
                        >
                            Sponsor Us
                        </button>
                        <div className='action__dev'>
                            <a href='https://discord.gg/UKV69V54rG'>
                                <img className='devPostSmall' src={devPost} alt='devpost' draggable='false' />
                            </a>
                        </div>
                        <div className='action__disc'>
                            <a href='https://xhacks.devpost.com'>
                                <img className='discordSmall' src={discord} alt='discord' draggable='false' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
