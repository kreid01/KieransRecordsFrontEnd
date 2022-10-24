import React from "react"
import PastOrders from "../features/ProfilePage/PastOrders";
import { redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfilePage(props) {

    const { user, isAuthenticated} = useAuth0();

       if (!isAuthenticated) {redirect('/')} else {
    
        return (
    <div className='profile--page'>
        <h1 className='page--header'>{user.name}</h1>
        <div className='profile--page--container'>
        <PastOrders
        customerOrders={props.customerOrders}
        customerDetails={props.customerDetails}
        recordData={props.recordData}
        />
        </div>
    </div>
    )
}}