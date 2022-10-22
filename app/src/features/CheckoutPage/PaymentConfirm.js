import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import PaymentDeatilsInput from "./PaymentDetailsInput";
import CheckoutCart from "./CheckoutCart";

export default function PaymentConfirm(props) {
     
    const { isAuthenticated } = useAuth0()

    function displayAddress(deliveryDetails) {
        return (
            <>
            <p>{deliveryDetails.firstName} {deliveryDetails.secondName}</p>
            <p>{deliveryDetails.addressFirstLine}</p>
            <p>{deliveryDetails.addressSecondLine}</p>
            <p>{deliveryDetails.postcode}</p>
            </>
        )
    }

    return (
        <>
        <div className='checkout--container'>
            <div className="left--checkout--container">
                <div className="delivery--header"><h1>DELIVERY</h1></div>
                <div className='delivery--container'>
                    <h3>DELIVERY ADDRESS</h3>
                {(isAuthenticated) ? ( <>
                    {displayAddress(props.customerDetails)}
                </>) : (props.validated) ? <> {displayAddress(props.formData)} </> : ( <PaymentDeatilsInput 
                inputThemeStyles={props.inputThemeStyles}
                validated={props.validated}
                setValidated={props.setValidated}
                customerDetails={props.customerDetails}
                formData={props.formData} 
                setFormData={props.setFormData}
                handleChange={props.handleChange}/>)}
                </div> 
                <div className="delivery--header"><h1>PAYMENT</h1></div>
                <div class='payment--container'>
                    {((!props.checkout) && ((isAuthenticated) || (props.validated))) && <button onClick={props.goToCheckout}>Continue</button>}
                </div>
            </div>
            <div className='right--checkout--container'>
                <CheckoutCart
                inputThemeStyles={props.inputThemeStyles}
                goToCheckout={props.goToCheckout}
                darkTheme={props.darkTheme}
                checkout={props.checkout}
                totalQuantity={props.totalQuantity}
                totalPrice={props.totalPrice}
                addToWishlist={props.addToWishlist}
                addToCart={props.addToCart}
                decrement={props.decrement}
                deleteFromCart={props.deleteFromCart}
                themeStyles={props.themeStyles}
                cart={props.cart}
                recordData={props.recordData}/>
            </div>
        </div>
        </>
    )
}