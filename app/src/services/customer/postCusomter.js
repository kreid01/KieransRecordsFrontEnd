import { nanoid } from "nanoid"
import axios from 'axios'

export default async function postCustomer(formData, linkToken) {
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
    try {
    const res = await axios.post(`https://localhost:7143/customer`, json)
    } catch (err) {
    console.log(err)
    }
}