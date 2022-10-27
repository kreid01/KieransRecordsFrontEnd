import axios from  'axios'

export default async function getCustomerDetails(setCustomerDetails, token) {

    try {
        const res = await axios.get(`https://localhost:7143/customers/${token}`)
        setCustomerDetails(res.data)
        } catch (err) {
        console.log(err)
        }
}