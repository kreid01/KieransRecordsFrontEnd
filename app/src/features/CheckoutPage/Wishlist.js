import React from 'react'; 
import { Link } from 'react-router-dom'

export default function Wishlist(props) {
    
    const wishlistData = props.wishlist.map((record, i) => {

        let id = 0

        // eslint-disable-next-line array-callback-return
        props.recordData.map((rec, i) => {
            if(record.name === rec.name) {
                id = i
            }
        })

        return (
            <div className='record' id={id} key={i}>
                <Link to={`/records/${id}`}>
                <img id='featured--record'                        
                src={record.imageUrl}
                alt=''
                />
                </Link>
                <div id='new--record--details'>
                    <h3 className='new--record--name'>{record.name}</h3>
                    <h3 className='new--record--artist'>{record.artist}</h3>
                </div>
                <div className='record--info'>
                <p className='record--details'>{record.releaseYear}  • {record.songCount} songs</p>
                <div className='record--buying'>
                    <p className='record--price'>£{record.price}</p>
                    <button 
                    style={props.inputThemeStyles}
                    onClick={() => props.deleteFromWishlist(i)}>Delete</button>
                    <button 
                    style={props.inputThemeStyles}
                    onClick={() => props.addToCart(record, id)}>Add to Cart</button>
                </div>
                </div>
            </div>
            )
    })
    return (
    <div className='wishlist--container'>
        <h1 className='page--header'>Wishlist</h1>
        <div className='featured--record--container'>
            {wishlistData}
        </div>
    </div> 
    )
}