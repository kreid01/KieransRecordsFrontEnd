/* eslint-disable array-callback-return */
import React from 'react';

export default function PastOrders(props) {

    const previousOrders = []
 
    if(props.customerOrders) {
    props.customerOrders.map(details => {
      details.orderContents.map(order => {
        previousOrders.push(order)
      })})}
 
    const userPreviousOrders = previousOrders.map(order => {
      console.log(order)  
        return (
            <div className='prev--order'>
                <p><strong>{order.name}</strong> for £{order.price}</p>
            </div>
          )
    })

    return (
        <>
        <h3>Your Details</h3>
        <h2>Your Orders</h2>
        <p>Address {props.customerDetails.addressFirstLine}, {props.customerDetails.addressSecondLine}</p>
        <p>Postcode: {props.customerDetails.postcode}</p>
        <div className='prev--order--container'>{userPreviousOrders}</div>
        </>
    )
}