import React from 'react';
import TrackPanel from '../../components/common/TrackPanel/TrackPanel';
import { data } from './assets/tracks.json';
import styles from './tracksection.css';

const TrackSection = ({ reference }) => {

    const renderTracks = () => {
        return data.map(({ name, desc, icon, featured }) => {
            return (
                <TrackPanel name={name} desc={desc} icon={icon} featured={featured} />
            );
        });
    }

    return (
        <section ref={reference} className='track-section'>
            <div className='primary-gradient'>
                <h1 className='header'>Our Tracks</h1>
            </div>
            <p className='track-desc'>We’ve been to hackathons with only a couple of tracks and while they’re not bad, we think more tracks is generally more inclusive for everyone. That’s why we’re doing our best to have a couple tracks for everyone, so that you have multiple chances to learn and win! </p>
            <div className='track-grid'>
                <TrackPanel />
            </div>
        </section>
    );
}

export default TrackSection;