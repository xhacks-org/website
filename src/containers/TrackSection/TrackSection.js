import React from 'react';
import TrackPanel from '../../components/TrackPanel/TrackPanel';
import assets from './assets/tracks.json';
import idea from './assets/idea.svg';
import rookie from './assets/rookie.svg';
import veteran from './assets/veteran.svg';
import solo from './assets/solo.svg';
import startup from './assets/startup.svg';
import opensource from './assets/opensource.svg';
import overall from './assets/overall.svg';
import './tracksection.css';

const TrackSection = ({ reference }) => {
    const imageAssets = { idea, rookie, veteran, solo, startup, opensource, overall };

    return (
        <section ref={reference} className='track-section'>
            <div className='maintext-gradient'>
                <h1 className='header'>Our Tracks</h1>
            </div>
            <p className='track-desc'>We’ve been to hackathons with only a couple of tracks and while they’re not bad, we think more tracks is generally more inclusive for everyone. That’s why we’re doing our best to have a couple tracks for everyone, so that you have multiple chances to learn and win! </p>
            <div className='track-grid'>
                {assets.data.map(({ name, desc, icon, featured }) => {
                    return (
                        <TrackPanel key={name} name={name} desc={desc} icon={imageAssets[icon]} featured={featured} />
                    );
                })}
            </div>
        </section>
    );
}

export default TrackSection;