import React from 'react';
import PaymentConfirm from '../features/CheckoutPage/PaymentConfirm'
import PayPal from '../features/CheckoutPage/PayPal'

export default function CheckoutPage(props) {
    
    return (
    <div className='cart--page' style={props.themeStyles} >
        <PaymentConfirm
         inputThemeStyles={props.inputThemeStyles}
         goToCheckout={props.goToCheckout}
         darkTheme={props.darkTheme}
         checkout={props.checkout}
         totalQuantity={props.totalQuantity}
         totalPrice={props.totalPrice}
         addToWishlist={props.addToWishlist}
         addToCart={props.ddToCart}
         decrement={props.decrement}
         deleteFromCart={props.deleteFromCart}
         themeStyles={props.themeStyles}
         cart={props.cart}
         recordData={props.recordData}
        validated={props.validated}
        setValidated={props.setValidated}
        customerDetails={props.customerDetails}
        formData={props.formData} 
        setFormData={props.setFormData}
        handleChange={props.handleChange}/>
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
        totalPrice={props.totalPrice}
        checkout={props.checkout}/></> ) : null }
        <> 
    
        </>
    </div>
    )
}