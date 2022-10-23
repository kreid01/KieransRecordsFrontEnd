export default function getCustomerOrders(linkToken, setCustomerOrders) {
    fetch(`https://localhost:7143/customers/orders/${linkToken}`,
     {headers: {'Authorization': `Bearer ${linkToken}`}})
    .then(res => res.json())
    .then(data => setCustomerOrders(data))
}