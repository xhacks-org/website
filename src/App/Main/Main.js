import React, { useState, useEffect } from 'react';
import likeYou from './assets/likeYou.svg';
import discord from './assets/devPost.svg';
import devPost from './assets/discord.svg';
import terminal from './assets/terminal.svg';

import '../Main/Main.css';

const Main = () => {  
    // var titles = ['great software', 'cool hardware', 'connected IOT', 'intuitive AI', 'great technology'];
    // const [title, setTitle] = useState('');
    // let index;   


    // setInterval(()=> {
    //     index = Math.floor(Math.random() * titles.length);
    //     console.log(index);
    //     setTitle(titles[index]);
    //     titles.splice(index);
    //     console.log(titles);
    //     if(titles.length == 0){
    //         titles = ['great software', 'astonishing hardware', 'amazing innovations', 'marvelous creations'];
    //     }
    // }, 3000);

    return (
        <div className='main'>
            <div className="main__text">
                <h1 className="text__date">AUGUST 15-17</h1>
                    <img className="text__likeYou" src={likeYou} alt='like you'/>
                    <h1 className="text__title">XHacks helps hackers build <span className="maintext-gradient">great software</span>
                </h1>
                <h1 className="text__subTitle">
                    Let’s be honest. Hackathons are great.
                    But we think that they can be improved even
                    further. That's why we created XHacks, to inspire hackers to create products that last.
                </h1>
                <div className="text__action">
                    <div className='action__buttons'>
                        <button className="action__register">Register</button>
                        <button className="action__sponsor">Sponsor Us</button>
                        <div className="action__dev">
                            <a><img className="devPostSmall" src={devPost} alt='devpost' draggable='false'/></a>
                        </div>
                        <div className="action__disc"> 
                            <a><img className="discordSmall" src={discord} alt='discord' draggable='false'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__terminal">
                <img className='terminal__placeholder' src={terminal} alt='terminal' draggable='false' />
            </div>
        </div>
    )
};

export default Main;