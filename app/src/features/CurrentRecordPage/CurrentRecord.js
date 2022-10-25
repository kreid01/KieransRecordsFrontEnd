import React from 'react'; 
import {Link} from 'react-router-dom'

export default function CurrentRecordPage(props) {

    const recordData = props.recordData
    const id = props.id

    const genresData = recordData[id].genres.map((genre, i)  => {
        if(genre !== "undefined") {
        return (
         <div key={i} className="genre"><Link
         to='/records'
         className='genre--nav'
         onClick={() => props.setGenreFromCurrentRecord(genre)}>{genre}</Link></div>
        )}
    })
    const currentRecordData =
    <div className='current--record' id={id} key={id}>
        <img className='current--record--image'                        
        src={recordData[id].imageUrl}
        alt=''
        />
        <div className='current--record--info'>
            <h3 className='current--record--artist'>{recordData[id].artist}<div className='quantity--remaining'>£{recordData[id].price} {recordData[id].quantity} Left</div></h3>
            <p className='current--record--details'>Released: <strong>{recordData[id].releaseYear}</strong> • <strong>{props.recordData[id].songCount} songs</strong> </p>
            <div className='current--record-genres'>
                {genresData}
            </div>
            <div className='current--record--buttons'>
                <button 
                 className='cart--add'
                onClick={() => props.addToCart(recordData[id], id)}>Add to Cart</button>
                 <p className='wishlist--or'> - or -</p>
                 <button 
                onClick={() => props.addToWishlist(recordData[id], id)}
                className='wishlist--add'>add to wishlist</button>
            </div>
        </div>
    </div>
    return (
    <div className='current--record--page'>
        <div className='current--record--header'>
            <h1 className='page--header'><strong>{recordData[id].name}</strong></h1>
        </div>
        <div className='current--record--container'>
          {currentRecordData}
        </div>
     </div>
    )
}