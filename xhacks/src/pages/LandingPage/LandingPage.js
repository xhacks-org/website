import React from 'react';
import './landingpage.css';
import logo from './Assets/logo.svg';
import main from './Assets/main.svg';


const LandingPage = () => {
    return (

        <div>
            <section className='navbar__section'>
                <div className='navbar'>
                    <div className='navbar__left'>
                        <img src={logo} alt='Logo' className='navbar__logo'/>
                        <a href='https://fonts.google.com/' className='navbar__item'>About</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Tracks</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Schedule</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Sponsors</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Our Team</a>
                    </div>
                    <div className='navbar__right'>
                        <button className='btn__reg'><span>[ </span> Register<span> ]</span></button>
                        <button className='btn__us'><span>[ </span> Sponsor Us<span> ]</span></button>
                    </div>
                </div>
            </section>
            <section className='landingcontent__section'>
                <div className='landingcontent'>
                    <div className='landingcontent__text'>
                        <img src={main} alt='Main' className='landingcontent__img'/>
                        <h3 className='landingcontent__sub'>Join us from August 15 - 17, 2021 for a weekend filled with technology, learning and prizes for everyone.</h3>
                        <div className='landingcontent__buttons'>
                            <button className='landingreg__btn'><span>[ </span> Register <span> ]</span></button>
                            <button className='landingus__btn'><span>[ </span> Sponsor Us <span> ]</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    );
}


export default LandingPage;