import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-email'>team@xhacks.ca</p>
            <h1 className='footer-name'>XHacks 2021 <span style={{ fontWeight: 400 }}>©</span></h1>
            <p className='footer-builtWith'>Built with 🔥 in 🇨🇦</p>
        </div>
    );
}

export default Footer;