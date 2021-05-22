import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './NavBar.css';
import facebook from './assets/facebookWhite.svg';
import linkedin from './assets/linkedinWhite.svg';
import instagram from './assets/instagramWhite.svg';
import twitter from './assets/twitterWhite.svg';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className="barLeft">
                <a href='https://xhacks.live'><img src={logo} alt='Logo' className='logo' draggable='false'/></a>
                <a href='/' className='item'>About</a>
                <a href='/' className='item'>Tracks</a>
                <a href='/' className='item'>FAQ</a>
                <a href='/' className='item'>Our Sponsors</a>
            </div>
            <div className="barRight">
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={facebook} alt='Footer Logo' className='facebook' draggable='false'/></a>
            </div>
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={linkedin} alt='Footer Logo' className='linkedin' draggable='false'/></a>
            </div>
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={instagram} alt='Footer Logo' className='ig' draggable='false'/></a>
            </div >
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={twitter} alt='Footer Logo' className='twitter' draggable='false'/></a>
            </div>
            </div>
        </div>
    )

};

export default NavBar;