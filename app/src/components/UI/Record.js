import React from 'react';
import { Link } from 'react-router-dom'

export default function Record(props) {


    return (
        <div className='record' id={props.id} key={props.i}>
        <Link to={`/records/${props.id}`}>
        <img className='record--image'                        
        src={props.imageUrl}
        alt=''
        />
        </Link>
        <div className='record--details'>
            <div className='record--name--price'>
            <h3 className='record--name'><strong>{props.name}</strong></h3>
            <p className='record--price'>£{props.price}</p>
            </div>
            <h3 className='record--artist'>{props.artist}</h3>
        </div>
        <p className='record--info'>{props.releaseYear}  • 
        {props.songCount} songs</p>
            
            <button style={props.inputThemeStyles} className='record--list--cart--add' 
            onClick={() => props.addToCart(props.record, props.id)}>Add to Cart</button>
    </div>
    )
}