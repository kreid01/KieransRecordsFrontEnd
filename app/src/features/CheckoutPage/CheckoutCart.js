import React from "react";
import { NavLink, Link } from 'react-router-dom'

export default function CheckoutCart(props) {

    const counts = {}
    let cartDataUnique =[]
    let cartData = []

    if(props.cart) {

    for(const records of props.cart) {
    counts[records] = counts[records] ? counts[records] + 1 : 1;
    }

    cartDataUnique = props.cart.reduce((acc, rec) => {
        if(!acc.find(u => u.name === rec.name)) {
            acc.push(rec)
        }
        return acc
      }, [])

    cartData = cartDataUnique.map((record, i) => {

        let id = 0

        // eslint-disable-next-line array-callback-return
        props.recordData.map((rec, i) => {
            if(record.name === rec.name) {
                id = i
            }
        })
        let quantityOfRecord = 0
        props.cart.map(rec => {
            if(record.name === rec.name) { quantityOfRecord++ }
        })


        return (
            <div className='cart--record' style={props.inputThemeStyles} id={id} key={i}>
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
                        <button 
                        style={props.inputThemeStyles}
                        onClick={() => props.decrement(i, id)}><i class="fa-solid fa-minus"></i></button>
                        <p className='cart--quantity'>{quantityOfRecord}</p>
                        <button  
                        style={props.inputThemeStyles}
                        onClick={() => props.addToCart(record, id)}><i class="fa-solid fa-plus"></i></button>
                        <p className='cart--record--price'>£{record.totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='cart--checkout' style={props.inputThemeStyles}>
            <h2 className='cart--checkout--header'><strong>IN YOUR CART</strong></h2>   
            <div className='cart--items--container'>
               {cartData}
            </div>
            <div className='cart--total--price'>
                <div>Total:</div>
                <div>£{props.totalPrice.toFixed(2)}</div>    
            </div>
            <NavLink className='cart--link'
            onClick={(props.checkout)? props.goToCheckout : ''}
            end to='/cart'><div onClick={props.handleClick} className='cart--link--button'>Checkout</div>
            </NavLink>
        </div>
    )
}}