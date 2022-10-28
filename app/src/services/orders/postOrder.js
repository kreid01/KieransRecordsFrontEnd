import { nanoid } from "nanoid"
import axios from "axios"

export default async function postOrder(cart, formData, linkToken) {
    const orderDetails = []
    const id = nanoid()
   
    cart.map(record => {
        return (
           orderDetails.push({name: record.name, stockNumber: `${record.stockNumber}`, price: `${record.price}`})
        )
    })
    const currentTime = new Date()
    const json = {
        "id": `${id}`,
        "customerLinkToken": `${linkToken}`,
        "orderContents": orderDetails,
        "timeOfOrder": `${currentTime}`,
        "isShippied": false,
        "deliveryAddress": {
            "firstName": `${formData.firstName}`,
            "secondName": `${formData.secondName}`,
            "email": `${formData.email}`,
            "phoneNumber": formData.phoneNumber,
            "addressFirstLine": `${formData.addressFirstLine}`,
            "addressSecondLine": `${formData.addressSecondLine}`,
            "postcode": `${formData.postcode}`
        }
      }
      try {
        const res = await axios.post(`https://localhost:7143/order`, json)
    } catch (err) {
        console.log(err)
    }
}