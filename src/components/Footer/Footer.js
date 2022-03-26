import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='center'>
            <h3>Question 01: Whats the differences between Props and State ?</h3>
            <p> Answer:Data is passed from one component to another using props. And the other hand State is a type of local data storage that can only be accessed by the component and cannot be shared with other components.</p>

            <h3> Question 02:How useState() works</h3>
            <p> Answer: useState() is a Hook that enables state variables to be used in functional components. This function takes the starting state and returns a variable with the current state value as well as another function to update it.</p>
        </div>
    );
};

export default Footer;