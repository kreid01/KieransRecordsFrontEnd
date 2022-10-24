export default function getCustomerDetails(setCustomerDetails, token) {
    fetch(`https://localhost:7143/customer/${token}`, {
        headers: {
        Authorization: `Bearer ${token}`
        }})
    .then(res => res.json())
    .then(data => setCustomerDetails(data))
}