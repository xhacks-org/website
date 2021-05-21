import React, { useRef } from 'react';
import './landingpage.css';
import NavBar from '../../components/NavBar/NavBar';
import TrackSection from '../../containers/TrackSection/TrackSection';
import Main from '../../containers/Main/Main';
import Mission from '../../containers/Mission/Mission';


const LandingPage = () => {
    const trackRef = useRef(null);
    
    return (
        <div className='app-container'>
            <NavBar/>
            <Main />
            <Mission />
            <TrackSection reference={trackRef} />
        </div>
    );
}


export default LandingPage;