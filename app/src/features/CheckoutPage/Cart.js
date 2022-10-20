import React from "react";
import { Link } from 'react-router-dom';

export default function Cart(props) {

    const counts = {};

    for(const records of props.cart) {
        counts[records] = counts[records] ? counts[records] + 1 : 1;
    }

    const  cartDataUnique = props.cart.reduce((acc, rec) => {
        if(!acc.find(u => u.name === rec.name)) {
            acc.push(rec)
        }
        return acc
      }, [])
    
    const cartTitleSummary = cartDataUnique.map((record, i) => {
        return (
        <div id={i} className="cart-record--total">
            <div>{counts[record]}x {record.name}</div>
            <div>£{record.price.toFixed(2) * counts[record]}</div>
        </div>
        )
    })

   

    const cartData = cartDataUnique.map((record, i) => {

        let id = 0

        // eslint-disable-next-line array-callback-return
        props.recordData.map((rec, i) => {
            if(record.name === rec.name) {
                id = i
            }
        })
        return (
            <div className='cart--record' id={id} key={i}>
                <Link to={`/records/${id}`}>
                    <img className='cart--record--img'                        
                    src={record.imageUrl}
                    alt={record.name}
                    />
                </Link>
                <div className='cart--item--info'>
                    <div className='cart--item--details'>
                        <h3 className='cart--record--name'>{record.name}</h3>
                        <h3 className='cart--record--artist'>{record.artist}</h3>
                    </div>
                    <div className='cart--record--buying'>
                        <p className='cart--record--price'>£{record.totalPrice.toFixed(2)}</p>
                        <button 
                        style={props.inputThemeStyles}onClick={() => props.decrement(i, id)}>-</button>
                        <p className='cart--quantity'>{counts[record]}</p>
                        <button style={props.inputThemeStyles} onClick={() => props.addToCart(record, id)}>+</button>
                        <button style={props.inputThemeStyles} onClick={() => props.deleteFromCart(i, id)}>Delete</button>
                        <button style={props.inputThemeStyles} onClick={() => props.addToWishlist(record, id)}
                         className='wishlist--add'>+Wishlist</button> 
                    </div>
                </div>
            </div>
        )
    })
    return (
    <div>
        <div className='cart--header' style={props.themeStyles}>
          <h1 style={props.themeStyles} className='page--header'>Cart</h1>
        </div>  
        <div  style={props.themeStyles}  className='cart--page--container'>
            <div className='cart--items--container'>
               {cartData}
            </div>
            <div className='cart--summary'>
                 {cartTitleSummary}
                <div className='cart--total--price'>
                    Total: {props.totalPrice.toFixed(2)}    
                    {props.cart.length > 0 && <button 
                    style={props.inputThemeStyles}
                    onClick={props.goToCheckout}
                    className='checkout--button'>Checkout</button>}
                </div>
             </div>
        </div>
     </div>
    )
}