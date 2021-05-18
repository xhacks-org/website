import React from 'react';
import panelBackground from './assets/panelBackground.svg';
import './trackpanel.css';

const TrackPanel = ({ name, desc, icon }) => {
    return (
        <div className='track-panel'>
            <div className='panel-content'>
                
            </div>
            <img src={panelBackground} alt='panel border' className='panel-bg' />        
        </div>
    );
}

export default TrackPanel;