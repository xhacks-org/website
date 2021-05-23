import React from 'react';
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion';
import './faqsection.css';

const FAQSection = () => {
    return (
        <div className='faq-section'>
            <div className='maintext-gradient faq-gradient'>
                <h1 className='header faq-header'>Our FAQ</h1>
            </div>
            <p className='faq-desc'>A Hackathon is a complicated event, so we know you’ll have tons of questions, so we’ve tried out best to answer as many as we can below. But, if you’re a curious person (like us) and have more questions, just hit us up at <span className='bold'>team@xhacks.ca</span>. and we’d love to help you out!</p>
            <div className='faq-grid'>
                <div className='faq-column--left'>
                    <FAQAccordion question="Hold up, what's a hackathon again?" answer='A hackathon is usually a 36-hour event, generally held over a weekend where hackers from everywhere come together and create anything that their imaginations can dream up!' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                </div>
                <div className='faq-column--right'>
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                    <FAQAccordion question='What does the fox say?' answer='nt-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 46:29:  The href attribute is required for an anchor to be keyboard accessible. ' />
                </div>
            </div>
        </div>
    );
}

export default FAQSection;