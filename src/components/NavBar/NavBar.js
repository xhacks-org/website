import React from 'react';
import logo from './assets/logo.svg';
import './NavBar.css';
import linkedin from './assets/linkedinWhite.svg';
import instagram from './assets/instagramWhite.svg';

const NavBar = ({ aboutClicked, tracksClicked, faqClicked }) => {
    return (
        <div className='navBar'>
            <div className="barLeft">
                <a href='https://xhacks.live'><img src={logo} alt='Logo' className='logo' draggable='false'/></a>
                <button onClick={aboutClicked} className='item'>About</button>
                <button onClick={tracksClicked} className='item'>Tracks</button>
                <button onClick={faqClicked} className='item'>FAQ</button>
                <button onClick={() => window.open('https://xhacks.live/mentorInfo.pdf')} className='item'>Mentors</button>
                <button onClick={() => window.open('https://xhacks.live/judgeInfo.pdf')} className='item'>Judges</button>
                <button onClick={() => window.open('https://xhacks.live/speakerInfo.pdf')} className='item'>Speakers</button>
            </div>
            <div className="barRight">
            <div className='icon'>
                <a href='https://www.linkedin.com/company/73262812/admin/'><img src={linkedin} alt='Footer Logo' className='linkedin' draggable='false'/></a>
            </div>
            <div className='icon'>
                <a href='https://www.instagram.com/xhackslive/'><img src={instagram} alt='Footer Logo' className='ig' draggable='false'/></a>
            </div >
            </div>
        </div>
    )

};

export default NavBar;