import React from 'react';

export default function Fotter(props) {
    return (
        <div className='footer--container' style={props.themeStyles}>
             <div className='company-container'>
                <h2>KR Records</h2>
                <p>KR records, continuously supplying your favorite for desriable prices.</p>
            </div>  
            <div className='contact--container'>
                <h3>Contact us</h3>
                <p>krrecords@info.org</p>
                <p>07449324055</p>
            </div> 
            <div className='signup--container'>
                <h3>Sign-up to be notified on offers and sales</h3>
                <input style={props.inputThemeStyles} type='text' placeholder='Email'></input>
                <button style={props.inputThemeStyles}>Subscribe</button>
            </div>
        </div>
    )
}