import React, { useRef } from 'react';
import './landingpage.css';
import loading from './assets/loading.svg';
import NavBar from '../components/NavBar/NavBar';
import TrackSection from '../containers/TrackSection/TrackSection';
import Main from '../containers/Main/Main';
import Mission from '../containers/Mission/Mission';
import FAQSection from '../containers/FAQSection/FAQSection';
import Footer from '../components/Footer/Footer';
import Sponsors from '../containers/Sponsors/Sponsors';
import './app.css';

const App = () => {
  const loadingRef = useRef(null);
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const missionRef = useRef(null);
  const faqRef = useRef(null);
  const sponsorsRef = useRef(null);
  const scrollToDiv = (ref) => window.scrollTo({top: ref.current.offsetTop-40, left: 0, behavior: 'smooth'});

  window.onload = () => {
    setTimeout(() => {
      loadingRef.current.style.display = 'none';
      contentRef.current.style.display = 'block';
    }, 500);
  }

  return (
    <div className="App">
      <div className='loading' ref={loadingRef}>
        <img src={loading} alt='loading' className='loadingSpinner' />
      </div>
      <div className='app-container' ref={contentRef}>
            <NavBar aboutClicked={() => scrollToDiv(missionRef)} faqClicked={() => scrollToDiv(faqRef)} tracksClicked={() => scrollToDiv(trackRef)} sponsorsClicked={() => scrollToDiv(sponsorsRef)} />
            <Main />
            <Mission reference={missionRef} />
            <TrackSection reference={trackRef} />
            <Sponsors reference={sponsorsRef} />
            <FAQSection reference={faqRef} />
            <Footer />
        </div>
    </div>
  );
}

export default App;
