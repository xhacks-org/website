import React from 'react';
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion';
import './faqsection.css';

const FAQSection = ({ reference }) => {
    return (
        <div className='faq-section' ref={reference}>
            <div className='maintext-gradient faq-gradient'>
                <h1 className='header faq-header'>Our FAQ</h1>
            </div>
            <p className='faq-desc'>A Hackathon is a complicated event, so we know you’ll have tons of questions, so we’ve tried out best to answer as many as we can below. But, if you’re a curious person (like us) and have more questions, just hit us up at <span className='bold'>team@xhacks.ca</span>. and we’d love to help you out!</p>
            <div className='faq-grid'>
                <div className='faq-column--left'>
                    <FAQAccordion gradient={true} question="Hold up, what's a hackathon again?" answer='A hackathon is usually a 36-hour event, generally held over a weekend where hackers from everywhere come together and create anything that their imaginations can dream up!' />
                    <FAQAccordion question='When will XHacks happen?' answer='XHacks will be happening from Friday, August 15 to Sunday, August 17 - fully virtual of course. Our hackathon is a 36-hour one, so you’ll have 36 hours to build a great product.' />
                    <FAQAccordion gradient={true} question='Sounds cool, but what’s the cost?' answer='Absolutely no cost! XHacks is completely free, so all you’ll need is a laptop, some earbuds and your favorite coffee or warm beverage. We’ll take care of the rest.' />
                    <FAQAccordion question='Where can I see the prizes?' answer='Our prizes aren’t yet up, but when they are, you’ll be able to see them on our Devpost. Keep watch for emails from us and we’ll make sure to tell you!' />
                    <FAQAccordion gradient={true} question='What platform will you be using?' answer='We’ll be communicating entirely on Discord, with most of our workshops being held there. Larger events such as opening and closing ceremonies will be streamed on Youtube.' />
                </div>
                <div className='faq-column--right'>
                    <FAQAccordion question='Am I eligible to attend?' answer='All students are eligible to attend XHacks. Whether you’re in middle-school, high-school, undergrad or even a master’s student, you’re eligible.' />
                    <FAQAccordion gradient={true} question='What about COVID-19 and all?' answer='XHacks will be entirely virtual, so the only reason you’ll need to leave your bedroom is to go to the washroom or get a snack!' />
                    <FAQAccordion question='I don’t know any code though...' answer='No problem! We’ve got an Idea Track specifically for non-technical hackers where you only have to pitch your idea and submit a design. We’ll also have workshops for you to learn as well.' />
                    <FAQAccordion gradient={true} question='How about the schedule?' answer='Our schedule will be posted in the coming weeks, so just make sure to keep an eye out on the emails we send to get notified!' />
                    <FAQAccordion question='I have more questions!' answer='And we’ve got answers (probably). Just shoot us an email at team@xhacks.ca and we’ll get back to you as soon as we can!' />
                </div>
            </div>
        </div>
    );
}

export default FAQSection;