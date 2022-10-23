import React from 'react';
import { Link } from 'react-router-dom'

export default function Record(props) {


    return (
        <div className='record' id={props.id} key={props.i}>
        <Link to={`/records/${props.id}`}>
        <img className='record--image'                        
        src={props.imageUrl}
        alt=''
        onClick={() => window.scrollTo(0, 0)}
        />
        </Link>
        <div className='record--details'>
            <h3 className='record--name'><strong>{props.name}</strong></h3>
            <h3 className='record--artist'><span className='record--artist--span'>{props.artist}</span></h3>
        </div>
            {(props.isFromCollection) ?
             <button className='record--list--cart--add' style={props.inputThemeStyles}
            onClick={() => props.deleteFromCollection(props.id)}>Delete from Collection</button> :
            (props.isFromWishlist) ? 
            <button 
            style={props.inputThemeStyles} 
            className='record--wishlist--add'
            onClick={() => props.deleteFromWishlist(props.record, props.id)}>Delete from wishlist</button>: null}
    </div>
    )
}