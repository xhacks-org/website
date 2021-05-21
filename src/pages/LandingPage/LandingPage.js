import React, { useRef } from 'react';
import './landingpage.css';
import NavBar from '../../components/common/NavBar/NavBar';
import TrackSection from '../../containers/TrackSection/TrackSection';
import NavBar from '../../components/NavBar/NavBar';
import Main from '../../components/Main/Main';
import Mission from '../../components/Mission/Mission';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hover:{
        textShadow: "5px 5px 6px rgba(0, 0, 0, 0.35)",
        cursor: "pointer"
    }
}))


const LandingPage = () => {
    const trackRef = useRef(null);
    
    return (
        <div className='app-container'>
            <NavBar/>
            <TrackSection reference={trackRef} />
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            <NavBar />
            <Main />
            <Mission />
        </div>
    );
}


export default LandingPage;