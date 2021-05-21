import React from 'react';
import './trackpanel.css';

const TrackPanel = ({ name, desc, icon, featured }) => {

    return (
        <div className='track-panel'>
            {featured && <label className='panel-featured'>FEATURED</label>}
            <div className='panel-content'>
                <img alt='track icon' src={icon} className={(featured) ? 'panel-icon-featured' : 'panel-icon'} />
                <h1 className='panel-name'>{name}</h1>
                <p className='panel-desc'>{desc}</p>
            </div>
        </div>
    );
}

export default TrackPanel;