import React from 'react'; 
import Carousel from '../../components/UI/Carousel';

export default function Wishlist(props) {
    
    return (
    <div className='wishlist--container'>
        <h1 className='page--header'>Wishlist</h1>
        <div className='featured--record--container'>
        <Carousel 
            records={props.wishlist}
            recordData={props.recordData}
            inputThemeStyles={props.inputThemeStyles}
            addToCart={props.addToCart}
            deleteFromWishlist={props.deleteFromWishlist}
            isFromWishlist={true}/>
        </div>
    </div> 
    )
}