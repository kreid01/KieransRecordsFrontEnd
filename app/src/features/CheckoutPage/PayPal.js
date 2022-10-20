/* eslint-disable array-callback-return */
import React from 'react';
import updateRecord from '../../services/records/updateRecord';
import { useAuth0 } from '@auth0/auth0-react'
import postCustomer from '../../services/customer/postCusomter';
import postOrder from '../../services/orders/postOrder';

export default function PayPal(props) {
    
    const { user, isAuthenticated } = useAuth0()
    const paypal = React.useRef()
    console.log(props.formData)

    const updateDatabase = () => props.cart.map(record => {
            updateRecord(record)
     })

    // eslint-disable-next-line no-unused-vars
    const cartDescription = props.cart.map(record => {
       return `${record.name} by ${record.artist} x ${record.quatity}`
    })
    React.useEffect(() => {
        
        window.paypal.Buttons({
            createOrder: (data, action) => {
                return action.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: props.totalPrice
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, action) => {
                const order = await action.order.capture()
                const userToken = (isAuthenticated) ? user.sub : null
                const userData = (isAuthenticated) ? props.customerDetails : props.formData
                updateDatabase() 
                postOrder(props.cartDataFromAPI, props.formData, userToken)
                postCustomer(userData, props.customerDetails, userToken)
                props.goToCheckout()
                props.emptyCartOnSuccessfulPayment()
                console.log(order)
            },
            onError : (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div style={props.themeStyles}className='paypal--container'>
            <div className="paypal--button" ref={paypal}></div>
        </div>
    )
}