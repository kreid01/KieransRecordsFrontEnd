import axios from  'axios'

export default async function getCustomerOrders(setCustomerOrders, token) {
    try {
        const res = await axios.get(`https://localhost:7143/customers/orders/${token}`)
        setCustomerOrders(res.data)
        } catch (err) {
        console.log(err)
        }
}