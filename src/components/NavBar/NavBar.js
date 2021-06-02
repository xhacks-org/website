import React from 'react';
import logo from './assets/logo.svg';
import './NavBar.css';
import facebook from './assets/facebookWhite.svg';
import linkedin from './assets/linkedinWhite.svg';
import instagram from './assets/instagramWhite.svg';
import twitter from './assets/twitterWhite.svg';

const NavBar = ({ aboutClicked, tracksClicked, faqClicked }) => {
    return (
        <div className='navBar'>
            <div className="barLeft">
                <a href='https://xhacks.live'><img src={logo} alt='Logo' className='logo' draggable='false'/></a>
                <button onClick={aboutClicked} className='item'>About</button>
                <button onClick={tracksClicked} className='item'>Tracks</button>
                <button onClick={faqClicked} className='item'>FAQ</button>
                <button onClick={() => window.open('mailto:team@xhacks.ca')} className='item'>Contact</button>
            </div>
            <div className="barRight">
            <div className='icon'>
                <a href='https://www.facebook.com/XHacks-100813098874902'><img src={facebook} alt='Footer Logo' className='facebook' draggable='false'/></a>
            </div>
            <div className='icon'>
                <a href='https://linkedin.com'><img src={linkedin} alt='Footer Logo' className='linkedin' draggable='false'/></a>
            </div>
            <div className='icon'>
                <a href='https://www.instagram.com/xhackslive/?hl=en'><img src={instagram} alt='Footer Logo' className='ig' draggable='false'/></a>
            </div >
            <div className='icon'>
                <a href='https://twitter.com/xhackslive'><img src={twitter} alt='Footer Logo' className='twitter' draggable='false'/></a>
            </div>
            </div>
        </div>
    )

};

export default NavBar;