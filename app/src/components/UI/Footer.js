import React from 'react';

export default function Footer(props) {
    return (
        <div className='footer--container'>
             <div className='company-container'>
                <h2><strong>KR Records</strong></h2>
                <p>KR records, continuously supplying your favorite for desriable prices.</p>
            </div>  
            <div className='contact--container'>
                <h3>Contact us</h3>
                <p>krrecords@info.org</p>
                <p>07449324055</p>
            </div> 
            <div className='signup--container'>
                <h3>Sign-up to be notified on offers and sales</h3>
                <input  type='text' placeholder='Email'></input>
                <button >Subscribe</button>
            </div>
        </div>
    )
}