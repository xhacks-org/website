import React from 'react';
import './landingpage.css';
import logo from './assets/logo.svg';
import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import logo4 from './assets/logo4.svg';
import main from './assets/main.svg';
import side1 from './assets/side1.svg';
import side2 from './assets/side2.svg';
import last1 from './assets/last1.svg';
import last2 from './assets/last2.svg';
import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';
import icon3 from './assets/icon3.svg';
import icon4 from './assets/icon4.svg';
import icon5 from './assets/icon5.svg';
import icon6 from './assets/icon6.svg';
import icon7 from './assets/icon7.svg';
import icon8 from './assets/icon8.svg';
import icon9 from './assets/icon9.svg';

const LandingPage = () => {
    return (

        <div>
            <section className='navbar__section'>
                <div className='navbar'>
                    <div className='navbar__left'>
                        <img src={logo} alt='Logo' className='navbar__logo'/>
                        <a href='https://fonts.google.com/' className='navbar__item'>About</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Tracks</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Sponsors</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Devpost</a>
                        <a href='https://fonts.google.com/' className='navbar__item'>Discord</a>
                    </div>
                    <div className='navbar__right'>
                        {/* <button className='btn__reg'><span>[ </span> Register<span> ]</span></button>
                        <button className='btn__us'><span>[ </span> Sponsor Us<span> ]</span></button> */}
                    </div>
                </div>
            </section>
            <section className='landingcontent__section'>
                <div className='landingcontent'>
                    <div className='landingcontent__text'>
                        <img src={main} alt='Main' className='landingcontent__img'/>
                        <h3 className='landingcontent__sub'>Join us from August 15 - 17, 2021 for a weekend filled with technology, learning and prizes for everyone.</h3>
                        <div className='landingcontent__buttons'>
                            <button className='landingdisc__btn'><span>[ </span> Discord <span> ]</span></button>
                            <button className='landingreg__btn'><span>[ </span> Register <span> ]</span></button>
                            <button className='landingus__btn'><span>[ </span> Sponsor Us <span> ]</span></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='landingmission__section'>
                <div className='landingmission'>
                    <div className='landingmission__top'>
                    <img src={side1} alt='Sideimg1' className='landingmission__side1'/>
                    <h3 className='landingmission__header'>Our Mission</h3>
                    <img src={side2} alt='Sideimg2' className='landingmission__side2'/>
                    </div>
                    <div className='landingmission__middle'>
                        <h6 className='landingmission__text'>Let’s be honest. Hackathons are great. But as all great things, we think that they can be improved even further. As avid hackers ourselves, we’ve been to many hackathons and we’ve noticed one common trend - after the hackathon, most projects get abandoned and during the hackathon, most projects are made simply for prizes. <br/><br/> That’s why we made XHacks. It’s the first hackathon with a promise for all hackers - We’ll try our very best to ensure that you leave XHacks with a proper product that can be used by real people.</h6>
                    </div>
                    <div className='landingmission__last'>
                    <img src={last1} alt='Lastimg1' className='landingmission__last1'/>
                    <img src={last2} alt='Lastimg2' className='landingmission__last2'/>
                    </div>
                </div>
            </section>

            <section className='landingtrack__section'>
                <div className='landingtrack'>
                    <div className='landingtrack__text'>
                        <h2 className='landingtrack__header'>Our Tracks</h2>
                        <h4 className='landingtrack__sub'>Check out our NINE tracks below. We've got something for everyone</h4>
                    </div>
                    <div className='landingtrack__tracks'>
                        <div className='track'>
                            <img src={icon1} alt='icon1' className='trackicon'/>
                            <h2 className='track__header'>Scale Track</h2>
                            <h4 className='track__details'>Improve existing projects and get judged based on the evel of improvements made.</h4>
                        </div>
                        <div className='track'>
                            <img src={icon2} alt='icon2' className='trackicon'/>
                            <h2 className='track__header'>Veteran Track</h2>
                            <h4 className='track__details'>Submit a technically complex and impressive project as a hackathon-veteran.</h4>
                        </div>
                        <div className='track'>
                            <img src={icon3} alt='icon3' className='trackicon'/>
                            <h2 className='track__header'>Rookie Track</h2>
                            <h4 className='track__details'>For beginner developers that have only gone to two hackathons or less. </h4>
                        </div>
                    </div>
                    <div className='landingtrack__tracks'>
                        <div className='track'>
                            <img src={icon4} alt='icon4' className='trackicon'/>
                            <h2 className='track__header'>Solo Track</h2>
                            <h4 className='track__details'>For Solo developers since making a project by yourself is tough, but rewarding!</h4>
                        </div>
                        <div className='track'>
                            <img src={icon5} alt='icon5' className='trackicon'/>
                            <h2 className='track__header'>Crowdsource Track</h2>
                            <h4 className='track__details'>If you use consumer-sourced data to build a prooduct, you’re eligible</h4>
                        </div>
                        <div className='track'>
                            <img src={icon6} alt='icon6' className='trackicon'/>
                            <h2 className='track__header'>Idea Track</h2>
                            <h4 className='track__details'>Submit only a design prototype and idea to get judged. No coding necessary!</h4>
                        </div>
                    </div>
                    <div className='landingtrack__tracks'>
                        <div className='track'>
                            <img src={icon7} alt='icon7' className='trackicon'/>
                            <h2 className='track__header'>Open Source Track</h2>
                            <h4 className='track__details'>Submit any project that’s available for other developers to utilize.</h4>
                        </div>
                        <div className='track'>
                            <img src={icon8} alt='icon8' className='trackicon'/>
                            <h2 className='track__header'>Startup Track</h2>
                            <h4 className='track__details'>Submit a product and get judged based on market-fit and startup-readiness.</h4>
                        </div>
                        <div className='track'>
                            <img src={icon9} alt='icon9' className='trackicon'/>
                            <h2 className='track__header'>Overall Track</h2>
                            <h4 className='track__details'>THe standard First, Second and Third place tracks. All projects are eligible!</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className='landingfaq__section'>
                <div className='landingfaq'>
                    <div className='landingfaq__text'>
                        <h2 className='landingfaq__header'>Frequently Asked Questions</h2>
                    </div>
                    <div className='landingfaq__questions'>
                        <div className='question'>
                            <h2 className='question__header'>What is a Hackathon?</h2>
                            <h4 className='question__details'>A hackathon is an event for anyone to come and create anything that their imaginations can dream up!</h4>
                        </div>
                        <div className='question'>
                            <h2 className='question__header'>Where?When?</h2>
                            <h4 className='question__details'>Xhacks will be completely online and will be held from August 15 to August 17.</h4>
                        </div>
                    </div>
                    <div className='landingfaq__questions'>
                        <div className='question'>
                            <h2 className='question__header'>How much does it cost?</h2>
                            <h4 className='question__details'>Completely free! You might even earn some money through prizes! Thanks to our sponsors, we’re able to provide evertything without cost .</h4>
                        </div>
                        <div className='question'>
                            <h2 className='question__header'>Who can attend?</h2>
                            <h4 className='question__details'>If you’re some sort of student, you’re eligible. High schoolers, University students and Graduate students are all welcome!</h4>
                        </div>
                    </div>
                    <div className='landingfaq__questions'>
                        <div className='question'>
                            <h2 className='question__header'>What if I don't know code?</h2>
                            <h4 className='question__details'>No problem. We’ve got an IDEA track for non-coders and a rookie track as well as cool workshops if you’re looking to learn!</h4>
                        </div>
                        <div className='question'>
                            <h2 className='question__header'>I have more questions</h2>
                            <h4 className='question__details'>And we’ve got answers (probably). Just shoot us an email at support@xhacks.ca and we’ll get back to you as soon as we can!</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className='landingsponsors__section'>
                <div className='landingsponsors'>
                <div className='landingsponsors__text'>
                        <h2 className='landingsponsors__header'>Sponsors</h2>
                        <h4 className='landingsponsors__sub'>Coming Soon...</h4>
                    </div>
                </div>
            </section>

            <section className='footer__section'>
                <div className='footer'>
                    <div className='footer__left'>
                        <a href='https://fonts.google.com/' className='footer__text'>support@xhacks.ca</a>
                    </div>
                    <div className='footer__middle'>
                        <h2 className='footer__text'>XHACKS 2021</h2>
                    </div>
                    <div className='footer__right'>
                        <a href='https://fonts.google.com/'><img src={logo1} alt='Footer Logo' className='footer__logo'/></a>
                        <a href='https://fonts.google.com/'><img src={logo2} alt='Footer Logo' className='footer__logo'/></a>
                        <a href='https://fonts.google.com/'><img src={logo3} alt='Footer Logo' className='footer__logo'/></a>
                        <a href='https://fonts.google.com/'><img src={logo4} alt='Footer Logo' className='footer__logo'/></a>
                    </div>
                </div>
            </section>
        </div>
        
    );
}


export default LandingPage;