export default function getCustomerDetails(linkToken, setCustomerDetails) {
    fetch(`https://localhost:7143/customer/${linkToken}`)
    .then(res => res.json())
    .then(data => setCustomerDetails(data))
}