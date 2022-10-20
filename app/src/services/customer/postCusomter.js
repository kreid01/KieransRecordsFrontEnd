import { nanoid } from "nanoid"

export default function postCustomer(formData, customerDetails, linkToken) {
    if(customerDetails) {

    } else {
    const id = nanoid()
    const json = {
        "id": `${id}`,
        "linkToken": `${linkToken}`,
        "firstName": `${formData.firstName}`,
        "secondName": `${formData.secondName}`,
        "email": `${formData.email}`,
        "phoneNumber": formData.phoneNumber,
        "addressFirstLine": `${formData.addressFirstLine}`,
        "addressSecondLine": `${formData.addressSecondLine}`,
        "postcode": `${formData.postcode}`,
    }
    console.log(json)
    fetch('https://localhost:7143/customer', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },  
    body:JSON.stringify(json)})
    }
}   