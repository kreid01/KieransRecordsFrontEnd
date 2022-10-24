export default function getCustomerOrders(setCustomerOrders, token) {
    fetch(`https://localhost:7143/customers/orders/${token}`)
    .then(res => res.json())
    .then(data => setCustomerOrders(data))
}