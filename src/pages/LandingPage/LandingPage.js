import React, { useRef } from 'react';
import './landingpage.css';
import NavBar from '../../components/NavBar/NavBar';
import TrackSection from '../../containers/TrackSection/TrackSection';
import Main from '../../components/Main/Main';
import Mission from '../../containers/Mission/Mission';


const LandingPage = () => {
    const trackRef = useRef(null);
    
    return (
        <div className='app-container'>
            <NavBar/>
            <TrackSection reference={trackRef} />
            <NavBar />
            <Main />
            <Mission />
        </div>
    );
}


export default LandingPage;