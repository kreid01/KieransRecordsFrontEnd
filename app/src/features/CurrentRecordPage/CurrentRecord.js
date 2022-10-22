import React from 'react'; 
import { generatePath } from 'react-router-dom';

export default function CurrentRecordPage(props) {

    const recordData = props.recordData
    const id = props.id

    const genresData = recordData[id].genres.map(genre  => {
        if(genre !== "undefined") {
        return (
         <div className="genre">{genre}</div>
        )}
    })
    const currentRecordData =
    <div className='current--record' id={id} key={id}>
        <img className='current--record--image'                        
        src={recordData[id].imageUrl}
        alt=''
        />
        <div className='current--record--info'>
            <h3 className='current--record--artist'>{recordData[id].artist}<div className='quantity--remaining'>{props.recordData[id].quantity} Left</div></h3>
            <p className='current--record--details'>{recordData[id].releaseYear}  • {props.recordData[id].songCount} songs </p>
            <div className='current--record-genres'>
                {genresData}
            </div>
            <p className='current--record--price'>£{recordData[id].price}</p>
            <div className='current--record--buying'>
                <button 
                style={props.inputThemeStyles}
                onClick={() => props.addToWishlist(recordData[id], id)}className='wishlist--add'>+Wishlist</button>
                <button 
                style={props.inputThemeStyles}
                onClick={() => props.addToCollection(recordData[id], id)}className='wishlist--add'>+Collection</button>
                <button 
                style={props.inputThemeStyles}
                onClick={() => props.addToCart(recordData[id], id)}>Add to Cart</button>
            </div>
        </div>
    </div>
    return (
    <div className='current--record--page' style={props.themeStyles}>
        <div className='current--record--header'>
            <h1 className='page--header'><strong>{recordData[id].name}</strong></h1>
        </div>
        <div className='current--record--container'>
          {currentRecordData}
        </div>
     </div>
    )
}