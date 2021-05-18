import React, { useRef } from 'react';
import './landingpage.css';
import NavBar from '../../components/common/NavBar/NavBar';
import TrackSection from '../../containers/TrackSection/TrackSection';

const LandingPage = () => {
    const trackRef = useRef(null);
    
    return (
        <div className='app-container'>
            <NavBar/>
            <TrackSection reference={trackRef} />
        </div>
    );
}


export default LandingPage;