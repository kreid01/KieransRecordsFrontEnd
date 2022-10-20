export default function updateCartAPI(json) {
    fetch('https://localhost:7143/cart', {
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json' },  
    body:JSON.stringify(json)})
    console.log(json)
}