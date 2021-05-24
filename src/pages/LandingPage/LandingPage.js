import React, { useRef } from 'react';
import './landingpage.css';
import NavBar from '../../components/NavBar/NavBar';
import TrackSection from '../../containers/TrackSection/TrackSection';
import Main from '../../containers/Main/Main';
import Mission from '../../containers/Mission/Mission';
import FAQSection from '../../containers/FAQSection/FAQSection';
import Footer from '../../components/Footer/Footer';


const LandingPage = () => {
    const trackRef = useRef(null);
    const missionRef = useRef(null);
    const faqRef = useRef(null);
    const scrollToDiv = (ref) => window.scrollTo({top: ref.current.offsetTop-40, left: 0, behavior: 'smooth'});
    
    return (
        <div className='app-container'>
            <NavBar aboutClicked={() => scrollToDiv(missionRef)} faqClicked={() => scrollToDiv(faqRef)} tracksClicked={() => scrollToDiv(trackRef)} />
            <Main />
            <Mission reference={missionRef} />
            <TrackSection reference={trackRef} />
            <FAQSection reference={faqRef} />
            <Footer />
        </div>
    );
}


export default LandingPage;