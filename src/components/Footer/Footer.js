import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='center'>
            <h3>Props vs State</h3>
            <p>Props can read only. Props Cannot be Modified. State changes can be asynchonous. State can be modified using this.setState</p>

            <h3>How useState() works</h3>
            <p>useState is a function that allows to have state variables in functional components.it stores the initial state value. it returns current state value as a variable. And another function updates this value.</p>
        </div>
    );
};

export default Footer;