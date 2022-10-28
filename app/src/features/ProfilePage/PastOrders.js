/* eslint-disable array-callback-return */
import React from 'react';

export default function PastOrders(props) {

    const previousOrders = []
 
    if(props.customerOrders) {
    props.customerOrders.map(details => {
      details.orderContents.map(order => {
        previousOrders.push(order)
      })})}
 
    const userPreviousOrders = props.customerOrders.map(details => {
      const prevOrderAlbumsData = details.orderContents.map(order => {
        return (
          <>
          <div className='prev--order--details'> <strong>{order.name}</strong>
          for £{order.price}</div>
          </>
        )
      })
      return (
        <div className='prev--order'>
          <div className='time--of--order'>Order on {details.timeOfOrder.substring(0, 15)}:</div>
          <div className='prev--order--albums'>{prevOrderAlbumsData}</div>
        </div>
        )
    })

    return (
        <>
        <div className='profile--details'>
          <h3>Your Details</h3>
          <p>Address: {props.customerDetails.addressFirstLine}, {props.customerDetails.addressSecondLine}</p>
          <p>Postcode: {props.customerDetails.postcode}</p>
          <p>Email: {props.customerDetails.email}</p>
        </div>
        <h2>Your Orders</h2>
        <div className='prev--order--container'>{userPreviousOrders}</div>
        </>
    )
}