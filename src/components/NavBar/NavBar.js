import React from 'react';
import logo from './assets/logo.svg';
import './NavBar.css';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='minLogo'>
                <img src={logo} alt='Logo'/>
            </div>
            <div className="barLeft">
                <img src={logo} alt='Logo' className='logo'/>
                <a href='/' className='item'>About</a>
                <a href='/' className='item'>Tracks</a>
                <a href='/' className='item'>FAQ</a>
                <a href='/' className='item'>Our Sponsors</a>
            </div>
            <div className="barRight">
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={facebook} alt='Footer Logo'/></a>
            </div>
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={linkedin} alt='Footer Logo'/></a>
            </div>
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={instagram} alt='Footer Logo'/></a>
            </div >
            <div className='icon'>
                <a href='https://fonts.google.com/'><img src={twitter} alt='Footer Logo'/></a>
            </div>
            </div>
        </div>
    )

};

export default NavBar;