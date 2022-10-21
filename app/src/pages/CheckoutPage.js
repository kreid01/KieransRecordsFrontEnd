import React from 'react';
import Cart from '../features/CheckoutPage/Cart'
import PaymentDeatilsInput from '../features/CheckoutPage/PaymentDetailsInput';
import Wishlist from '../features/CheckoutPage/Wishlist';
import PayPal from '../features/CheckoutPage/PayPal'
import { useAuth0 } from '@auth0/auth0-react';

export default function CheckoutPage(props) {

    const { isAuthenticated} = useAuth0()
    
    return (
    <div className='cart--page' style={props.themeStyles} >
        
        { (props.checkout) ? (
        <>
        { !isAuthenticated ? ( 
        <PaymentDeatilsInput
        inputThemeStyles={props.inputThemeStyles}
        validated={props.validated}
        setValidated={props.setValidated}
        customerDetails={props.customerDetails}
        formData={props.formData} 
        setFormData={props.setFormData}
        handleChange={props.handleChange}/>  ) : null }
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
        checkout={props.checkout}/> </>) : 
        <>
        <Cart 
        totalPrice={props.totalPrice}
        goToCheckout={props.goToCheckout}
        addToWishlist={props.addToWishlist}
        addToCart={props.addToCart}
        decrement={props.decrement}
        deleteFromCart={props.deleteFromCart}
        inputThemeStyles={props.inputThemeStyles}
        themeStyles={props.themeStyles}
        cart={props.cart}
        recordData={props.recordData}/>
        <Wishlist
        themeStyles={props.themeStyles}
        inputThemeStyles={props.inputThemeStyles}
        recordData={props.recordData}
        cart={props.cart}
        wishlist={props.wishlist}
        addToCart={props.addToCart}
        deleteFromWishlist={props.deleteFromWishlist}/>
        </>
        }
    </div>
    )
}