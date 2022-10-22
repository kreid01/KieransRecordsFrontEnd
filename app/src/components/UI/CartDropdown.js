import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export default function CartDropdwon(props) {


    const counts = {};
    let cartDataUnique =[]
    let cartTitleSummary = []
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
    
    cartTitleSummary = cartDataUnique.map((record, i) => {
        return (
        <div id={i} className="cart-record--total">
            <div>{counts[record]}x {record.name}</div>
            <div>£{record.price.toFixed(2) * counts[record]}</div>
        </div>
        )
    })

   

    cartData = cartDataUnique.map((record, i) => {

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
                        <button 
                        onClick={() => props.decrement(i, id)}>-</button>
                        <p className='cart--quantity'>{counts[record]}</p>
                        <button  onClick={() => props.addToCart(record, id)}>+</button>
                        <p className='cart--record--price'>£{record.totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='cart--dropdown'>
            <h2 className='cart--dropdown--header'>Your Cart</h2>   
            <div className='cart--items--container'>
               {cartData}
            </div>
            <div className='cart--total--price'>
                <div>Total:</div>
                <div>{props.totalPrice.toFixed(2)}</div>    
            </div>
            <NavLink className='cart--link'
            onClick={(props.checkout)? props.goToCheckout : ''}
            end to='/cart'>Checkout
            </NavLink>
        </div>
    )
}}