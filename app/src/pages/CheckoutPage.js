import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import PaymentDeatilsInput from "../features/CheckoutPage/PaymentDetailsInput";
import CheckoutCart from "../features/CheckoutPage/CheckoutCart";
import PayPal from "../features/CheckoutPage/PayPal";

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
    <div className='cart--page' style={props.themeStyles}>
        <div className='checkout--container'>
            <div className="left--checkout--container">
                <div className="delivery--header"><h1>DELIVERY</h1></div>
                <div className='delivery--container'>
                    <h3>DELIVERY ADDRESS</h3>
                {(isAuthenticated && props.customerDetails) ? ( <>
                    {displayAddress(props.customerDetails)}
                </>) : (props.validated) ? <> {displayAddress(props.formData)} </> : ( <PaymentDeatilsInput 
                validated={props.validated}
                setValidated={props.setValidated}
                customerDetails={props.customerDetails}
                formData={props.formData} 
                setFormData={props.setFormData}
                handleChange={props.handleChange}/>)}
                </div> 
                <div className="delivery--header"><h1>PAYMENT</h1></div>
                <div class='payment--container'>
                    {((!props.checkout) && ((isAuthenticated) || (props.validated))) && <button 
                    style={props.inputThemeStyles}
                    className='continue--button'
                    onClick={props.goToCheckout}>Continue</button>}
                </div>
                { (props.checkout) ? (
                <>
                <PayPal 
                validated={props.validated}
                customerDetails={props.customerDetails}
                customerData={props.customerDetails}
                formData={props.formData}
                emptyCartOnSuccessfulPayment={props.emptyCartOnSuccessfulPayment}
                cartDataFromAPI={props.cartDataFromAPI}
                recordData={props.recordData}
                goToCheckout={props.goToCheckout}
                cart={props.cart}
                setRecordsAsSold={props.setRecordsAsSold}
                totalPrice={props.totalPrice}
                checkout={props.checkout}/></> ) : null }
                <>
                </>
            </div>
            <div className='right--checkout--container' style={props.inputThemeStyles}>
                <CheckoutCart
                goToCheckout={props.goToCheckout}
                darkTheme={props.darkTheme}
                checkout={props.checkout}
                totalQuantity={props.totalQuantity}
                totalPrice={props.totalPrice}
                addToWishlist={props.addToWishlist}
                addToCart={props.addToCart}
                decrementRecordInCart={props.decrementRecordInCart}
                deleteFromCart={props.deleteFromCart}
                cart={props.cart}
                recordData={props.recordData}/>
            </div>
        </div>
     </div>
        </>
    )
}